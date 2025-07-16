"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { email, z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import { toast } from "sonner";
import FormField from "@/components/FormField";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/client";
import { Signin, Signup } from "@/lib/actions/auth.action";

type FormType = "sign-in" | "sign-up";

interface AuthFormProps {
  type: FormType;
}

const authFormSchema = (type: FormType) => {
  return z.object({
    username:
      type === "sign-up" ? z.string().min(3).max(25) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(8),
  });
};

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const route = useRouter();
  const isSignPage = type === "sign-in";
  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
        const { username, email, password } = values;
        const userCreadentails = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const result = await Signup({
          uid: userCreadentails.user.uid,
          username: username!,
          email,
          password,
        });

        if (!result?.success) {
          toast.error(result?.message);
          return;
        }

        toast.success("Account created successfully.");
        route.push("/sign-in");
      } else {
        const { email, password } = values;
        const userCreadentail = await signInWithEmailAndPassword(auth,email,password)
        const idToken = await userCreadentail.user.getIdToken()
        if(!idToken){
          toast.error("Sign in Failed")
          return
        }
        await Signin({email,idToken})
        toast.success("Sign in successfully.");
        route.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(`There is an error: ${error}`);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen max-sm:px-4 max-sm:py-8">
      <div className="border-2 p-10 bg-blue-50 sm:w-[500px] rounded-xl text-black/70">
        <div className="flex items-center justify-center gap-2 mb-3">
          <img
            className="mix-blend-multiply"
            src="/InterviewLogo.jpg"
            alt="logo"
            width={350}
          />
        </div>
        <p className="flex items-center  text-xl font-bold justify-center gap-2 mb-6">
          Practice job interview with AI
        </p>
        <div className="space-y-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {!isSignPage && (
                <FormField
                  control={form.control}
                  name="username"
                  label="Username"
                  placeholder="Enter username"
                  type="text"
                />
              )}
              <FormField
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter email"
                type="email"
              />
              <FormField
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter password"
                type="password"
              />
              <Button
                className="w-full hover:cursor-pointer bg-gray-300"
                type="submit"
              >
                {isSignPage ? "Sign in" : "Create Account"}
              </Button>
            </form>
          </Form>
          <div className="flex gap-2 items-center justify-center">
            <p className="text-sm">
              {isSignPage ? "Create new account" : "Account already exists"}
            </p>
            <Link
              className="font-bold text-sm"
              href={!isSignPage ? "/sign-in" : "sign-up"}
            >
              {!isSignPage ? "SIGN IN" : "SIGN UP"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
