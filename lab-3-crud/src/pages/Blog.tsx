import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { useBlog } from "@/contexts/blog/useBlog";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Blog = () => {
  const { blogs } = useBlog();
  return (
    <div>
      <h1>Blog</h1>
      <div className="flex flex-col gap-4 my-4">
        {blogs.length > 0 ? (
          blogs.map((blog, i) => (
            <Card key={i} className={cn(!blog.published && "bg-gray-100")}>
              <CardHeader>
                <Badge>{blog.published ? "Published" : "Draft"}</Badge>
                <Link to={`/blog/${blog.id}`} className="flex justify-between">
                  <span className="text-lg">{blog.title} </span>
                  <span>&rarr;</span>
                </Link>
              </CardHeader>
            </Card>
          ))
        ) : (
          <p>No blogs found</p>
        )}
      </div>
      <Button asChild>
        <Link to="/blog/new">Add Post</Link>
      </Button>
    </div>
  );
};

export default Blog;
