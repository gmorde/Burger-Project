export class categorie {
    Id: number;
    Title: string;
    Icon: string; 
    Href: string;
}

export class product {
    ProductId: number; 
    CategorieId: number; 
    Title: string; 
    Description: string; 
    Price: number; 
    Image: string;
}