export interface Iproducts{
    id: number;
    title: string;
    description: string;
    images: string;
    price: number;
    rating: number;
    thumbnail: string;
    category: string
}

export interface Ibanner{
    title?: string
}

export interface IProduct {
  id: number;
  title: string;
  images: string[];
}

export interface IShoppingCartProvider {
    children: React.ReactNode
}
 
export interface IcartItems {
    id: number,
    qty: number
}

