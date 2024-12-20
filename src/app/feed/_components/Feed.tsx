import BlogCard from "@/components/ui/blog-card";
import React from "react";

const Feed = () => {
  const blogData = [
    {
      title: "Understanding React Props",
      description:
        "Learn how to pass data between components using props in React. This guide covers the basics with examples.",
      readTime: "5 min read",
      date: "20/12/2024",
      slug: "ednKBknkNKJnkBiLlub",
    },
    {
      title: "Introduction to TypeScript",
      description:
        "Discover the benefits of TypeScript for building robust applications. A must-know for modern developers.",
      readTime: "8 min read",
      date: "19/12/2024",
      slug: "ednKBknkNKJnkBiLlub",
    },
    {
      title: "Next.js: The React Framework",
      description:
        "Explore the features of Next.js and how it simplifies server-side rendering and static site generation.",
      readTime: "7 min read",
      date: "18/12/2024",
      slug: "ednKBknkNKJnkBiLlub",
    },
    {
      title: "Mastering Tailwind CSS",
      description:
        "A complete guide to building beautiful, responsive designs with Tailwind CSS. Practical tips included.",
      readTime: "6 min read",
      date: "17/12/2024",
      slug: "ednKBknkNKJnkBiLlub",
    },
    {
      title: "Understanding Context API",
      description:
        "Learn how to manage state effectively in React using the Context API. Simple and powerful.",
      readTime: "4 min read",
      date: "16/12/2024",
      slug: "ednKBknkNKJnkBiLlub",
    },
    {
      title: "Getting Started with Firebase",
      description:
        "Learn how to integrate Firebase into your application for real-time features and backend-as-a-service.",
      readTime: "9 min read",
      date: "15/12/2024",
      slug: "ednKBknkNKJnkBiLlub",
    },
    {
      title: "Building with TanStack Query",
      description:
        "Discover the power of TanStack Query for managing server state in your React applications.",
      readTime: "10 min read",
      date: "14/12/2024",
      slug: "ednKBknkNKJnkBiLlub",
    },
  ];

  return (
    <div className="flex w-3/4 flex-col gap-4">
      {blogData.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          description={blog.description}
          readTime={blog.readTime}
          date={blog.date}
          slug={blog.slug}
        />
      ))}
    </div>
  );
};

export default Feed;
