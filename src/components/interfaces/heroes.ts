export interface IHeroData {
  id: string;
  name: string;
  universe: number;
  datails: {
    fullName: string;
    birthday: string;
    homeland: string;
    height: number;
    weight: number;
  };
}
