import {useEffect } from 'react'
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import directus from "../lib/directus";
import styles from "../styles/BlogPost.module.css";
import { GetBlogByID , getAllBlogs , updateBlog , DeleteBlogById } from "../services/apiCalls.tsx";

const BlogPage = ({ post }) => {

  const CallApistoTest = async()=>{
    try {
        var GetBlogByID_res = await GetBlogByID(1);
        console.log("GetBlogByID data",GetBlogByID_res.data.data);

        var getAllBlogs_res = await getAllBlogs();
        console.log("getAllBlogs data",getAllBlogs_res.data.data);

        var updateBlog_res = await updateBlog(1,"title_1_updated");
        console.log("updateBlog data",updateBlog_res.data.data);

        // var DeleteBlogById_res = await DeleteBlogById(1);
        // console.log("DeleteBlogById data",DeleteBlogById_res);
        
    } catch (error) {
        console.log(error);
    }
}

  useEffect(()=>{
      CallApistoTest();
  },[]);

  return (
    <div className={styles.container}>
      <h1>{post.title}</h1>
      <MDXRemote {...post.content} />
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const res = await directus.items("blog").readByQuery({
    filter: { slug: params.slug },
    fields: ["title", "content"],
  });

  return {
    props: {
      post: {
        title: res.data[0].title,
        content: await serialize(res.data[0].content),
      },
    },
  };
};

export const getStaticPaths = async () => {
  const res = await directus.items("blog").readByQuery({
    limit: -1,
    fields: ["slug"],
  });

  return {
    paths: res.data.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export default BlogPage;
