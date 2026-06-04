import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Courts from "@/components/courts";
import Membership from "@/components/membership"
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
export default function Home() {
  return (
     <main className="min-h-screen">
       <Header />
       <Hero />
       <About />  
       <Courts />
       <Membership />
       <Contact />
       <Footer />
     </main>
  );
}
