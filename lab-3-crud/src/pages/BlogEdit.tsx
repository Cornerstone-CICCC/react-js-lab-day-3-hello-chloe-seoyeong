import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useBlog } from "@/contexts/blog/useBlog";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BlogEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { blogs, dispatch } = useBlog();
  const blog = blogs.find((blog) => blog.id === id);

  const [blogForm, setBlogForm] = useState({
    id: "",
    title: "",
    content: "",
    published: false,
  });

  useEffect(() => {
    if (blog) {
      setBlogForm({
        id: blog.id,
        title: blog.title,
        content: blog.content,
        published: blog.published,
      });
    }
  }, [blog]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "edit", payload: { ...blogForm } });
    navigate(`/blog/${id}`);
  };
  return (
    <div>
      <h1>BlogEdit</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          name="title"
          value={blogForm.title}
          placeholder="Blog's Title"
          onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
        />
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          name="content"
          value={blogForm.content}
          placeholder="Blog's Content"
          rows={5}
          onChange={(e) =>
            setBlogForm({ ...blogForm, content: e.target.value })
          }
        />
        <div className="flex items-center space-x-2">
          <Checkbox
            id="published"
            checked={blogForm.published}
            onCheckedChange={() =>
              setBlogForm({ ...blogForm, published: !blogForm.published })
            }
          />
          <Label htmlFor="published">Publish</Label>
        </div>
        <Button type="submit">Save Post</Button>
      </form>
    </div>
  );
};

export default BlogEdit;
