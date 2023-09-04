import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className="overflow-x-hidden overflow-y-scroll bg-gradient-to-r from-zinc-100 to-blue-50 antialiased text-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
