"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { blogPosts } from "@/data/blog-posts";
import { cn } from "@/lib/utils";

const categories = [
  { key: "all", label: "Alle Beiträge" },
  { key: "branche", label: "Branchen" },
  { key: "modul", label: "Funktionen" },
  { key: "ratgeber", label: "Ratgeber" },
];

export function BlogListContent() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  // Sort by date descending
  const sorted = [...filtered].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 hero-gradient overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              <span className="gradient-text-animated">Blog</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Praxisnahe Tipps, Ratgeber und Branchenwissen für Schweizer KMU
              und Handwerksbetriebe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === cat.key
                    ? "bg-gradient-to-r from-primary-500 to-accent-400 text-white shadow-glow-sm"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-surface-light-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            key={activeCategory}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {sorted.map((post) => (
              <motion.div key={post.slug} variants={staggerItem}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:border-primary-200 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.titleDe}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className={cn(
                          "px-3 py-1 rounded-full text-xs font-semibold",
                          post.category === "branche"
                            ? "bg-primary-500/90 text-white"
                            : post.category === "modul"
                              ? "bg-accent-500/90 text-white"
                              : "bg-neutral-800/80 text-white"
                        )}
                      >
                        {post.category === "branche"
                          ? "Branche"
                          : post.category === "modul"
                            ? "Funktion"
                            : "Ratgeber"}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-neutral-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString("de-CH", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors line-clamp-2">
                      {post.titleDe}
                    </h2>
                    <p className="text-sm text-neutral-500 leading-relaxed line-clamp-3 mb-4">
                      {post.excerptDe}
                    </p>
                    <div className="flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:text-primary-700 transition-colors">
                      Weiterlesen
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 hero-gradient overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6 leading-tight">
              Überzeugen Sie sich selbst
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              Testen Sie Finito Pro 30 Tage kostenlos und erleben Sie, wie
              einfach Ihr Geschäftsalltag sein kann.
            </p>
            <motion.a
              href="https://app.finitopro.ch/register"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl text-lg shadow-glow hover:shadow-glow-lg transition-all"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Jetzt gratis starten
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
