import Head from 'next/head';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

type PageProps = {
  title: string;
  children: JSX.Element | JSX.Element[];
  className?: string;
};

export default function PageLayout({ title, children, className }: PageProps) {
  const pageTitle = `MaxWood | ${title}`;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Generated by create manu app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className={`flex-1 ${className}`}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
