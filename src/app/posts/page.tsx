import Link from "next/link";

export default async function page() {
  const response = await fetch('https://dummyjson.com/posts?limit=10');
  const data = await response.json();

  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>
      <ul>
        {
          data.posts.map((posts: any) => (
            <li key={posts.id} className="mb-5">
              <Link href={`/posts/${posts.id}`}>{posts.title}</Link>
            </li>
          ))
        }
      </ul>
    </main>
  )
}
