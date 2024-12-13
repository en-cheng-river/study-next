interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export default async function Page() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
    next: { revalidate: 0 },
  });
  const posts: PostType[] = await data.json();
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
