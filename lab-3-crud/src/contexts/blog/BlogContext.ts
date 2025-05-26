import React, { createContext } from "react";
import type { IBlog } from "../../types/blog";
import type { BlogAction } from "@/reducers/blogReducer";

export type BlogContextType = {
  blogs: IBlog[];
  dispatch: React.Dispatch<BlogAction>;
};

export const BlogContext = createContext<BlogContextType>({
  blogs: [],
  dispatch: () => {},
});
