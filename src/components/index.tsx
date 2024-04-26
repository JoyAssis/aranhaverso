import { spidermanFont } from "@/fonts";
import styles from "./heroesList.module.scss";
import { IHeroData } from "./interfaces/heroes";

interface Iprops {
  heroes: IHeroData[];
}
export default function HeroList({ heroes }: Iprops) {
  return (
    <>
      <h1 className={`${spidermanFont.className} ${styles.title}`}>
        PERSONAGENS
      </h1>
      {/* {heroes.map((hero) => (
        <p key={hero.id}>{hero.name}</p>
      ))} */}
    </>
  );
}
