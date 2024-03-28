import Image from "next/image";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Specs from "./components/Specs";

export default function Home() {
  return (
    <>
      <Header />
    <main className="h-screen">
    <Landing />
    <Specs />
      
    </main></>
  );
}
