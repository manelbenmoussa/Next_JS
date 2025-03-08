import Link from "next/dist/client/link";

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
    </>
  );
}
