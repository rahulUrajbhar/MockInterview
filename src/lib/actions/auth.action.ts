"use server";

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";

interface SignUpParams {
  uid: string;
  username: string;
  email: string;
  password: string;
}
interface SignInParams {
  email: string;
  idToken: string;
}
export interface User {
  id: string;
  username: string;
  email: string;
}

const ONE_WEEK = 60 * 60 * 24 * 7;

export async function Signup(params: SignUpParams) {
  const { uid, username, email, password } = params;

  try {
    const userRecord = await db.collection("users").doc(uid).get();
    if (userRecord.exists) {
      return {
        success: false,
        message: "User already exits. please sign in",
      };
    }
    await db.collection("users").doc(uid).set({ username, email });
    return {
      success: true,
      message: "Account Created Successfully",
    };
  } catch (error: any) {
    console.error("Error during sign up:", error);
    if (error.code === "auth/email-already-in-use") {
      return {
        success: false,
        error: "Email already in use. Please use a different email.",
      };
    }
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}

export async function Signin(params: SignInParams) {
  const { email, idToken } = params;
  try {
    const userRecord = await auth.getUserByEmail(email);
    if (!userRecord) {
      return {
        success: false,
        message: "User don't exits. Create new account.",
      };
    }
    await setSessionCookie(idToken);
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to log into an Account.",
    };
  }
}

export async function setSessionCookie(idToken: string) {
  const cookiesStore = await cookies();
  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: ONE_WEEK * 1000,
  });
  cookiesStore.set("session", sessionCookie, {
    maxAge: ONE_WEEK,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });
}

export async function getCurrentUser(): Promise<User |null>{
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session")?.value
  if(!sessionCookie){ return null}

  try {
    // Verify the session cookie and extract claims
    const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
    const userRecord = await db.collection("users").doc(decodedClaims.uid).get();
    if(!userRecord.exists){return null}
    return {
      ...userRecord.data(),
      id: userRecord.id
    } as User;
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function isAuthenticated(){
  const user = await getCurrentUser()
  return !!user;
}