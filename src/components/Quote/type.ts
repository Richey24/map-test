export type ITEM = {
    id: string;
    name: string;
    image: string;
    variants: string;
    quantity: {
        amount: number;
        type: string
    };
    price: number;
    amount: number;
    date: Date;
}