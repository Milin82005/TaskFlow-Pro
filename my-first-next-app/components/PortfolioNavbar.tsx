import Link from "next/link";

export default function PortfolioNavbar() {
  return (
    <nav>
      <Link href="/portfolio">Home</Link> |
      <Link href="/portfolio/about"> About </Link> |
      <Link href="/portfolio/projects"> Projects </Link> |
      <Link href="/portfolio/contact"> Contact </Link>
    </nav>
  );
}