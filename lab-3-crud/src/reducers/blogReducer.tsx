import type { IBlog } from "@/types/blog";

export type BlogAction =
  | { type: "add"; payload: IBlog }
  | { type: "delete"; payload: { id: string } }
  | { type: "edit"; payload: Partial<IBlog> & { id: string } };

export const blogReducer = (blogs: IBlog[], action: BlogAction): IBlog[] => {
  switch (action.type) {
    case "add":
      return [...blogs, action.payload];
    case "delete":
      return blogs.filter((blog) => blog.id !== action.payload.id);
    case "edit":
      return blogs.map((blog) =>
        blog.id === action.payload.id ? { ...blog, ...action.payload } : blog
      );
    default:
      return blogs;
  }
};
