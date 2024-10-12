import SectionKirimanHeaderBlog from "@/section/blog_params/SectionKirimanHeaderBlog";
import { BlogParams } from "@/types/blog/blogParams";
import React from "react";

const page = ({ params }: BlogParams) => {
  return (
    <>
      <SectionKirimanHeaderBlog id={params.blog_id} />
    </>
  );
};

export default page;
