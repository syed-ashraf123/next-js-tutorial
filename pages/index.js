import Image from "next/image";
export default function Home() {
  return (
    <>
      <h1>Index Page</h1>

      <img src="/1.jpg" alt="This is a tree" />
      <Image
        src="/1.jpg"
        height="500px"
        width="500px"
        alt="This is a tree"
        quality={50}
        priority={true}
      />
      {/* <Image src="/1.jpg" layout="fill" /> */}
    </>
  );
}
