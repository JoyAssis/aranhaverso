import { IHeroData } from "./interfaces/heroes";

interface Iprops {
  heroes: IHeroData[];
}
export default function HeroList({ heroes }: Iprops) {
  return (
    <>
      <h1>PERSONAGENS</h1>
    </>
  );
}
