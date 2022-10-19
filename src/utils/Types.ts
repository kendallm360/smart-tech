export interface ICategory {
  id: string;
  name?: string;
  item?: Item[];
}

export type Item = {
  image: string;
  name: string;
  regularPrice: string;
  sku: number;
};
