import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import classes from "./page.module.css";
import Link from "next/link";
import { Suspense } from "react";
import MealsLoadingPage from "./loading-out";

const Meals = async () => {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
};

export default function MealsPage() {
  return (
    <>
      <haeder className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>

        <p>Choose your favorite recipe</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </haeder>
      <main className={classes.main}>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
