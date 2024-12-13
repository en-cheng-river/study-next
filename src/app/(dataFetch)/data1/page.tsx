export default async function Page() {
  let data = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
    next: { revalidate: 0 },
  });
  let posts = await data.json();
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
