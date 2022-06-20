import Head from "next/head";
import { Key, PropsWithChildren, ReactNode } from "react";

type PageProps = {
  id: Key;
  title?: string;
  meta?: ReactNode;
};

const Page = ({ id, title, meta, children }: PropsWithChildren<PageProps>) => {
  return (
    <>
      <Head key={id}>
        <title>{title}</title>
        {meta}
      </Head>

      {children}
    </>
  );
};

export default Page;
