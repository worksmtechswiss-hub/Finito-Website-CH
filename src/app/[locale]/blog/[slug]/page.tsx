import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";
import { blogPosts } from "@/data/blog-posts";
import { BlogPostContent } from "./BlogPostContent";

const postBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};

  return generatePageMetadata({
    title: `${post.titleDe} | Finito Pro Blog`,
    description: post.excerptDe,
    path: `/blog/${slug}`,
    locale,
    keywords: post.tags,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = postBySlug(slug);
  if (!post) notFound();

  return <BlogPostContent post={post} />;
}
