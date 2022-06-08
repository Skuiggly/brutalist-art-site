import Head from "next/head";
import Navbar from "../components/navbar";
import styles from "../styles/Layout.module.css"
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Art exhibit</title>
        <meta name="description" content="Website for imaginary art exhibit in brutalist style" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar items={[{
        href: "/", text: "HOME"
      },
      {
        href: "/about", text: "ABOUT"
      }
      ]} />
        
      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}