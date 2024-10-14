import SectionBadanKirimanBlog from "@/section/blog_params/SectionBadanKirimanBlog";
import SectionKirimanHeaderBlog from "@/section/blog_params/SectionKirimanHeaderBlog";
import SectionTestimonial from "@/section/blog_params/SectionTestimonial";
import { BlogParams } from "@/types/blog/blogParams";
import React from "react";

const page = ({ params }: BlogParams) => {
  return (
    <>
      <SectionKirimanHeaderBlog id={params.blog_id} />
      <SectionBadanKirimanBlog />
      <SectionTestimonial />
    </>
  );
};

export default page;
