import BlogHero from "@/components/blog/BlogHero";
import ArticleGrid from "@/components/blog/ArticleGrid";
import { articles } from "@/lib/blog";

export default function page() {
  // filter by tag from url if provided
  //   const activeTag = searchParams?.tag || "";

  return (
    <>
      <BlogHero />

      <ArticleGrid articles={articles} />
    </>
  );
}
