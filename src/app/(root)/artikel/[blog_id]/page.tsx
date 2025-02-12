import SectionBadanKirimanBlog from "@/section/blog_params/SectionBadanKirimanBlog";
import SectionKirimanHeaderBlog from "@/section/blog_params/SectionKirimanHeaderBlog";
import SectionTestimonial from "@/section/blog_params/SectionTestimonial";
import { BlogParams } from "@/types/blog/blogParams";
import React from "react";

const page = async ({ params }: { params: Promise<{ blog_id: string }> }) => {
  const slug = (await params).blog_id;
  return (
    <>
      <SectionKirimanHeaderBlog id={slug} />
      <SectionBadanKirimanBlog />
      <SectionTestimonial />
    </>
  );
};

export default page;
