import { HomeIcon } from "lucide-react";
import { memo } from "react";
import { Link } from "react-router-dom";

const Header = memo(({ firstname }: { firstname: string }) => {
  return (
    <header className="flex justify-between p-4 border-b-2">
      <nav>
        <menu className="flex gap-4">
          <li>
            <Link to="/" className="flex items-center gap-2">
              <HomeIcon />
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/blog/new">Add Post</Link>
          </li>
          {/* <li>
            <Link to="/blog/:id">Blog Detail</Link>
          </li>
          <li>
            <Link to="/blog/edit/:id">Edit Post</Link>
          </li> */}
        </menu>
      </nav>
      <div>{firstname}</div>
    </header>
  );
});

export default Header;
