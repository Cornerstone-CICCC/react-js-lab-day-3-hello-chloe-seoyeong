import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useBlog } from "@/contexts/blog/useBlog";
import type { IBlog } from "@/types/blog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const BlogNew = () => {
  const navigate = useNavigate();
  const [blogForm, setBlogForm] = useState<IBlog>({
    id: "",
    title: "",
    content: "",
    published: false,
  });
  const { dispatch } = useBlog();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBlog = {
      id: uuidv4(),
      title: blogForm.title,
      content: blogForm.content,
      published: blogForm.published,
    };

    dispatch({ type: "add", payload: newBlog });
    setBlogForm({
      id: "",
      title: "",
      content: "",
      published: false,
    });
    navigate("/blog");
  };
  return (
    <div>
      <h1>New Post</h1>
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
        <Button type="submit">
          {blogForm.published ? "Add Post" : "Save as Draft"}
        </Button>
      </form>
    </div>
  );
};

export default BlogNew;
