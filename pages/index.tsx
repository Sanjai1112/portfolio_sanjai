import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "../components/NavBar";
import HomeContent from "../components/HomeContent";
import About from "../components/About";
import Works from "../components/Works";
import Contact from "../components/Contact";
// import Projects from "../components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen font-mono mx-auto w-5/6">
      <NavBar />
      <HomeContent />
      <About/>
      <Works/>
      {/* <Projects/> */}
      <Contact/>
    </main>
  );
}
