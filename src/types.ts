export interface IBook {
    title: string;
    authorFirst?: string;
    authorLast: string;
    id: string;

    edition?: string;
    place?: string;
    publisher?: string;
    date?: string;

    isbn10?: string;
    isbn13?: string;
    LOC?: string;

    keywords?: string[];
    description?: string;
}

export interface IPostBook {
    title: string;
    authorFirst?: string;
    authorLast: string;

    edition?: string;
    place?: string;
    publisher?: string;
    date?: string;

    isbn10?: string;
    isbn13?: string;
    LOC?: string;

    keywords?: string[];
    description?: string;
}
