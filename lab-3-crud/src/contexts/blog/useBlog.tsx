import { useContext } from "react";
import { BlogContext } from "./BlogContext";

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context)
    throw Error("useBlog must be used inside a BlogContextProvider");
  return context;
};
