"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const NavHeader = () => {
  const [isUserAuth, setIsUserAuth] = useState<boolean | null>(null);
  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch("/api/auth/check");
      const data = await res.json();
      setIsUserAuth(data.isUserAuth);
    };

    checkAuth();
  }, []);

  if (isUserAuth === null) {
    return null; // You can return a loading state here
  }
  return (
    <ul className="flex items-center justify-center gap-10 text-xl font-sans">
      <li className="cursor-pointer"><Link href={"/interview"}>Interview</Link></li>
      {!isUserAuth && (
        <li>
          <Link href="/sign-in">
            <Button className="cursor-pointer">Sign in</Button>
          </Link>
        </li>
      )}
    </ul>
  );
};

export default NavHeader;
