import Link from "next/link";
import React from "react";

import { Post } from "../types/Post";

interface OwnProps {
  post: Post;
}

export const PostLink: React.FC<OwnProps> = ({ post }) => (
  <li>
    <Link href="/posts/[id]" as={`/posts/${post.id}`}>
      <a>{post.title}</a>
    </Link>

    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);
