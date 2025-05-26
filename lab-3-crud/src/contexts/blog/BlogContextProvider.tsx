import { useReducer, type ReactNode } from "react";
import { BlogContext } from "./BlogContext";
import { blogReducer } from "../../reducers/blogReducer";

export function BlogContextProvider({ children }: { children: ReactNode }) {
  // const [blogs, setBlogs] = useState<IBlog[]>([]);
  // const { blogs, setBlogs } = useBlog();
  const [blogs, dispatch] = useReducer(blogReducer, []);
  return (
    <BlogContext.Provider value={{ blogs, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
}
