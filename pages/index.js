import dynamic from "next/dynamic";
export default function Home() {
  const Dynamic = dynamic(() =>
    import("../Dynamic").then((res) => console.log(res))
  );
  return (
    <>
      <h1>Index Page</h1>
      <Dynamic />
    </>
  );
}
