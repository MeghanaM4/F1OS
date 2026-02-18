import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="w-full h-full overflow-hidden">
      <div className="z-10">
        <Header />
      </div>

      <div className="ml-[1rem] z-20 flex items-center h-full">
        <Navbar />
      </div>
    </main>
  );
}