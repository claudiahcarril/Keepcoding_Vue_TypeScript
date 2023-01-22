export interface Products {
    title:       string;
    price:       number;
    description: string;
    images:      string[];
    category:    Category;
    id:          number;
    creationAt:  Date;
    updatedAt:   Date;
}

export interface Category {
    id:         number;
    name:       string;
    image:      string;
    creationAt: Date;
    updatedAt:  Date;
}
