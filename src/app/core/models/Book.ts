import { Author } from "./Author";
import { Category } from "./Category";

export interface Book {
    id?: number,
    title?: string,
    pages?: number,
    description?: string,
    publisher?: string,
    releaseDate?: string,
    categories?: Category[],
    authors?: Author[],
    creationDate?: string,
    modificationDate?: string,
}