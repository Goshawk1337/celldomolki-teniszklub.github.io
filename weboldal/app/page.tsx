import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Courts from "@/components/courts";
export default function Home() {
  return (
     <main className="min-h-screen">
       <Header />
       <Hero />
       <About />  
       <Courts />
     </main>
  );
}
