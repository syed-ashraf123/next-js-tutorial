import { useState, useEffect } from "react";
export default function Home({ res }) {
  const [user, setUser] = useState(res[0]);

  return (
    <>
      <h1>
        {user ? (
          <>
            {user.name} {user.age}
          </>
        ) : (
          "Loading..."
        )}
      </h1>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:5000");
  const res = await response.json();
  return { props: { res } };
}
