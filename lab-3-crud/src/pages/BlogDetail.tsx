import { Button } from "@/components/ui/button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useBlog } from "@/contexts/blog/useBlog";
import toast from "react-hot-toast";
import { Badge } from "@/components/ui/badge";

const BlogDetail = () => {
  const { blogs, dispatch } = useBlog();
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) return;

  const handleDelete = (id: string) => {
    dispatch({ type: "delete", payload: { id } });
    toast.success(`Successfully deleted ${blog.title}`);
    navigate("/blog");
  };

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h1>{blog.title}</h1>
        <Badge>{blog.published ? "Published" : "Draft"}</Badge>
      </div>
      <p>{blog.content}</p>
      <div className="flex gap-2 justify-center mt-10">
        <Button>
          <Link to={`/blog/edit/${id}`}>Edit Post</Link>
        </Button>
        <Button onClick={() => handleDelete(blog.id)}>Delete Post</Button>
      </div>
    </div>
  );
};

export default BlogDetail;
