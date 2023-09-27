import axios from "axios";
import { useEffect, useState } from "react";
import usePosts, { Post } from "./hooks/usePosts";

interface Props {
  onSelectPost: (id: number) => void;
}

const PostList = ({ onSelectPost }: Props) => {
  const pageSize = 10;
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({ pageSize });

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data?.pages.map((page, index) =>
          page.map((post) => (
            <li
              onClick={() => onSelectPost(post.id)}
              key={post.id}
              className="list-group-item"
            >
              {post.title}
            </li>
          ))
        )}
      </ul>
      <button
        className="btn btn-primary my-3 ms-1"
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;
