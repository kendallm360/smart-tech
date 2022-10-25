export interface ICategory {
  id: string;
  name?: string;
  item?: Item[];
}

export type Item = {
  // id?: string;
  image: string;
  name: string;
  regularPrice: string;
  sku: number;
};
