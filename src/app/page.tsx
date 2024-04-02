import Image from "next/image";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Specs from "./components/Specs";
import Accessories from "./components/Accessories";
import Recipes from "./components/Recipes";

export default function Home() {
  return (
    <>
      <Header />
    <main className="h-screen">
    <Landing />
    <Specs />
        <Accessories />
        <Recipes />
    </main></>
  );
}
