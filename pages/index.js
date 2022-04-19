import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Home() {
  const router = useRouter();
  const navigate = () => {
    router.push({
      pathname: "/home",
      query: { id: 25 },
    });
  };
  useEffect(() => {
    router.prefetch("/home");
  }, []);
  return (
    <>
      <h1>Index Page</h1>
      <button onClick={() => router.reload()}>Reload</button>
      <button onClick={() => router.back()}>Back</button>
      <button onClick={() => router.push("/home?id=2")}>Home Page</button>
      <button onClick={() => navigate()}>Home Page</button>
      <button onClick={() => router.replace("/?id=888")}>Change Query</button>
    </>
  );
}
