import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
function home() {
  const router = useRouter();
  const [Id, setId] = useState("");

  useEffect(() => {
    console.log(router.isReady);
    if (!router.isReady) return;
    console.log(router.query);
    const { id } = router.query;
    setId(id);
  }, [router.isReady]);

  return <h1>home {Id}</h1>;
}

export default home;
