import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#000319] flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Testimonials />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
