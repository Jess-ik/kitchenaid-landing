import Image from "next/image";
import Header from "./components/Header";
import Landing from "./components/Landing";

export default function Home() {
  return (
    <>
      <Header />
    <main className="h-screen">
    <Landing />
     
      <h2 >Caractéristiques</h2>
    </main></>
  );
}
