export interface BlogPost {
  slug: string;
  category: "branche" | "modul" | "ratgeber";
  titleDe: string;
  excerptDe: string;
  contentDe: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
}

import { branchPosts } from "./branches";
import { modulePosts } from "./modules";
import { ratgeberPosts } from "./ratgeber";

export const blogPosts: BlogPost[] = [
  ...branchPosts,
  ...modulePosts,
  ...ratgeberPosts,
];
