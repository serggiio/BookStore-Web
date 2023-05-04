import { Book } from "./Book";

export interface Author {
  Id?: number;
  Name?: string;
  Country?: string,
  Books?: Book[],
}
