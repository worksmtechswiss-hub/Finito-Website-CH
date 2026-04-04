"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { BlogPost } from "@/data/blog-posts/index";
import { blogPosts } from "@/data/blog-posts/index";

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  // Get related posts (same category, exclude current)
  const related = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero with image */}
      <section className="relative pt-24 pb-0 hero-gradient overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zum Blog
            </Link>
            <div className="flex items-center justify-center gap-4 text-sm text-white/50 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("de-CH", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
              {post.titleDe}
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              {post.excerptDe}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-card-hover"
          >
            <Image
              src={post.image}
              alt={post.titleDe}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg prose-neutral max-w-none
              prose-headings:font-semibold prose-headings:text-neutral-900
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-neutral-100
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-2
              prose-p:text-neutral-600 prose-p:leading-relaxed prose-p:mb-4
              prose-li:text-neutral-600 prose-li:mb-1
              prose-ul:my-4 prose-ul:space-y-1
              prose-ol:my-4 prose-ol:space-y-1
              prose-strong:text-neutral-900
              prose-blockquote:border-l-4 prose-blockquote:border-l-primary-500 prose-blockquote:bg-primary-50/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-neutral-700 prose-blockquote:my-8
              prose-table:my-8 prose-table:w-full prose-table:border-collapse
              prose-th:bg-neutral-50 prose-th:border prose-th:border-neutral-200 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:text-sm prose-th:font-semibold prose-th:text-neutral-900
              prose-td:border prose-td:border-neutral-200 prose-td:px-4 prose-td:py-3 prose-td:text-sm prose-td:text-neutral-600
              prose-hr:my-10 prose-hr:border-neutral-100"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.contentDe}
            </ReactMarkdown>
          </motion.div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-neutral-100">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-neutral-100 text-neutral-600 text-sm rounded-full"
                >
                  <Tag className="w-3.5 h-3.5" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA inline */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
            Bereit, Ihren Betrieb zu digitalisieren?
          </h2>
          <p className="text-neutral-500 mb-8">
            Testen Sie Finito Pro 30 Tage kostenlos — keine Kreditkarte nötig.
          </p>
          <a
            href="https://app.finitopro.ch/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl shadow-glow hover:shadow-glow-lg transition-all"
          >
            Jetzt kostenlos testen
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-8 text-center">
              Weitere Beiträge
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((relPost) => (
                <Link
                  key={relPost.slug}
                  href={`/blog/${relPost.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:border-primary-200 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={relPost.image}
                      alt={relPost.titleDe}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors line-clamp-2 mb-2">
                      {relPost.titleDe}
                    </h3>
                    <p className="text-sm text-neutral-500 line-clamp-2">
                      {relPost.excerptDe}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

