'use client';

import { useEffect, useState } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState<any[]>();
  const [num, setNum] = useState(0);

  useEffect(() => {
    async function fetchPosts() {
      let res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'force-cache',
      });
      let data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, [num]);

  if (!posts) return <div>Loading...</div>;

  return (
    <div>
      <button
        onClick={e => {
          e.preventDefault();
          setNum(num + 1);
        }}
      >
        重新请求
      </button>
      <ul>
        {Array.isArray(posts) &&
          posts?.map((post: any) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}
