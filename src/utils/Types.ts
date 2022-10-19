export interface ICategory {
  id: string;
  item?: Item[];
}

export type Item = {
  image: string;
  name: string;
  regularPrice: string;
};
