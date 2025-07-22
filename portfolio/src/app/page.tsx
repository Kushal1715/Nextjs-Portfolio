import About from "@/components/home/About";
import HomePage from "@/components/home/HomePage";

export default function Home() {
  return (
    <div className="px-4 lg:px-6 py-3 xl:px-[85px] 2xl:px-[173px] 2xl:py-[20px]">
      <HomePage />
      <About />
    </div>
  );
}
