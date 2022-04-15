import React from "react";
import Head from "next/head";
function about() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="about" content="This is about page of company" />
        <link rel="icon" href="/1.jpg" />
      </Head>
      <h1 className="">About</h1>
      <button className="btn btn-primary">Normal</button>
    </>
  );
}

export default about;
