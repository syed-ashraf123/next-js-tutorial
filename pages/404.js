import React, { useEffect } from "react";
import { useRouter } from "next/router";

function ErrorPage() {
  const router = useRouter();
  const handleClick = () => router.push("/");
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);
  return (
    <h1>
      <center>
        <span> ErrorPage -- Page Not Found</span>
        <br />
        <button onClick={() => handleClick()}>GO Back to Main Page</button>
      </center>
    </h1>
  );
}

export default ErrorPage;
