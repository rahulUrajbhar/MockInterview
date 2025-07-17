"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavHeader from "./NavHeader";

const Header = () => {
  const route = usePathname();
  const NoHeader = route === "/sign-in" || route === "/sign-up";

  return (
    <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-md">
      {!NoHeader && (
        <nav className="bg-white/10 flex items-center justify-between pr-5">
          <Link href="/">
            <img
              className="cursor-pointer"
              src="/InterviewLogo.jpg"
              alt="logo"
              width={350}
            />
          </Link>
          <NavHeader />
        </nav>
      )}
    </header>
  );
};

export default Header;
