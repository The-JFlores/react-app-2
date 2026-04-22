
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <p>Welcome to my website.</p>

      <nav>
        <Link href="/">Home</Link> |{" "} 
        <Link href="/about">About</Link> |{" "}
        <Link href="/projects">Projects</Link> |{" "}
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}