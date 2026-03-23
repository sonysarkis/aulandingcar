import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Inventory from "@/components/Inventory";
import Benefits from "@/components/Benefits";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-neutral-950 font-sans">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.16),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(59,130,246,0.14),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.03),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-white/10"></div>
        <div className="absolute left-1/2 top-0 h-full w-full max-w-7xl -translate-x-1/2 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.03),transparent)]"></div>
      </div>
      
      <Navbar />
      
      <main className="relative z-10 pt-24">
        <Hero />
        <Process />
        <Inventory />
        <Benefits />
        <LeadForm />
      </main>

      <Footer />
    </div>
  );
}
