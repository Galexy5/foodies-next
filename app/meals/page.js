import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <h1>Meals page</h1>
      <Link href="/slug1">Slug 1</Link>
      <Link href="/slug2">Slug 2</Link>
    </>
  );
}
