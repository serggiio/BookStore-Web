import { Author } from "./Author";
import { Category } from "./Category";

export interface Book {
    Id?: number,
    Title?: string,
    Pages?: number,
    Description?: string,
    Publisher?: string,
    ReleaseDate?: string,
    Categories?: Category[],
    Authors?: Author[],
    CreationDate?: string,
    ModificationDate?: string,
}