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
      <article className="bg-gray-100 p-4">
        <h1 className="text-3xl font-bold">Documents &amp; Forms</h1>
      </article>
      <FileList />
    </div>
  );
};

export default Home;
