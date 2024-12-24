import { posts } from "@/app/data/posts";
export default function Post({ params }) {
  const post = posts.find((post) => post.id===params.id);
  if(!post){
    return<h1>post not found</h1>
  }
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
