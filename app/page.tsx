import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl text-center font-serif">Welcome to Idle Key</h1>
      <Link href={"/upload"}>
        <button className="block mx-auto">Go to Idle Key</button>
      </Link>
    </main>
  );
}
