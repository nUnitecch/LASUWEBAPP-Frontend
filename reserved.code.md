"use client";

import FullScreenLoader from "@/components/FullScreenLoader";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ProtectedRoutes({
children,
}: {
children: React.ReactNode;
}) {
const [isAuthorized, setIsAuthorized] = useState(false);
const router = useRouter();

useEffect(() => {
const checkAuth = () => {
const token = localStorage.getItem("token");

      if (!token) {
        router.replace("/auth/signin");
      } else {
        setIsAuthorized(true);
      }
    };

    checkAuth();

}, [router]);

if (!isAuthorized) {
return <FullScreenLoader />;
}

return <>{children}</>;
}
