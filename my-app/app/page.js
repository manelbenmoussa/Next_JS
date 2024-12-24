import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      <Link href="/about">Go to about</Link><br/>
      <Link href="/posts/1">Go to post 1</Link><br/>
      <Link href="/posts/2">Go to post 2</Link><br/>
      <Link href="/posts/3">Go to post 3</Link>
    </main>
  );
}
