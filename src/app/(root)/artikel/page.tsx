import SectionDaftarHeaderBlog from "@/section/blog/SectionDaftarHeaderBlog";
import SectionFAQ from "@/section/blog/SectionFAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EcoCrestConnect | Blog",
  description: "Generated by create next app",
};

const page = () => {
  return (
    <>
      <SectionDaftarHeaderBlog />
      <SectionFAQ />
    </>
  );
};

export default page;
