import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "The Road",
  description: "Created by vvebanextgen",
};

export default function RootLayout({ children }) {
  return (
   <html lang="en">
    <Head>
     <link
      href="https://fonts.googleapis.com/css?family=Vollkorn:400,400i,600,700,900&display=swap"
      rel="stylesheet"
     />
    </Head>
    <body>{children}</body>
   </html>
  );
}
