export interface Document {
  id: string;
  title: string;
  date: string;
  parent: string | null;
  order: number;
  author: string;
  category: string;
  tags: string[];
}
