export interface Product{ //If We want to use this interface in another component,
                        //we need to write export
    name: string;
    price: number;
    image: string;
    nameProduct: string;
    category?: string; //using "?" we say that this attribute is optional.
}