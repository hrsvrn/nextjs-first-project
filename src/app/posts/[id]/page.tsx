export default  async function Page({params}: {params: any}) {
  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post= await response.json();
  return (
    <main className="text-center">
        <h1 className="text-2xl text-zinc-950 font-bold pt-10">{post.title}</h1>
        <p className="max-w-[700px] mx-auto">{post.body}</p>
    </main>
  )
}
