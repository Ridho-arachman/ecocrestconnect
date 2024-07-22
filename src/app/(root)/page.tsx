import SectionCaraKerja from "@/section/homepage/SectionCaraKerja";
import SectionCTA from "@/section/homepage/SectionCTA";
import SectionDaftarFitur from "@/section/homepage/SectionDaftarFitur";
import SectionHeaderHero from "@/section/homepage/SectionHeaderHero";
import SectionManfaat from "@/section/homepage/SectionManfaat";
import SectionTestimonial from "@/section/homepage/SectionTestimonial";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EcoCrestConnect | Home",
  description: "Generated by create next app",
};

const Home = () => {
  return (
    <>
      <SectionHeaderHero />
      <SectionDaftarFitur />
      <SectionManfaat />
      <SectionCaraKerja />
      <SectionTestimonial />
      <SectionCTA />
    </>
  );
};

export default Home;
