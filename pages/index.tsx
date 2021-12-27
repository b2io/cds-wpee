import Head from "next/head";
import { FC } from "react";

import { FileList, Header } from "../components";

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>Western Pennsylvania Electrical Employees</title>
        <meta
          name="description"
          content="This is a list of documents for members of the Western Pennsylvania Electrical Employees"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <article className="bg-gray-900 py-4 px-6">
        <h1 className="text-white text-3xl font-bold max-w-screen-2xl mx-auto">
          Documents &amp; Forms
        </h1>
      </article>
      <FileList />
    </div>
  );
};

export default Home;
