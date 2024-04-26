import HeroList from "@/components";
import { IHeroData } from "@/components/interfaces/heroes";
import styles from "./page.module.scss";

async function getHeroesData(): Promise<IHeroData[]> {
  const res = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`);

  if (!res.ok) {
    throw new Error("Failed to request list");
  }
  return res.json();
}

export default async function Home() {
  const heroes = await getHeroesData();
  console.log(heroes);
  return (
    <main className={styles.main}>
      <HeroList heroes={heroes.data} />
    </main>
  );
}
