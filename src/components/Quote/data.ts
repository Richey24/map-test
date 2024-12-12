import { ITEM } from "./type"
import itemImage from "../../assets/item.png"

export const ItemRow = [
    "Items",
    "Variants",
    "Quantity",
    "Price",
    "Amount",
    "Expected Delivery Date"
]

export const ItemRow2 = [
    "Items",
    "Variants",
    "Quantity",
    "Price",
    "Expected Delivery Date",
    "Amount",
]

export const dummyItems: ITEM[] = [
    {
        id: "#28373",
        name: "Mechanical ventilator",
        variants: "Blue",
        image: itemImage,
        quantity: {
            amount: 100,
            type: "pieces"
        },
        price: 200,
        amount: 2000,
        date: new Date("2024-08-07")
    },
    {
        id: "#28374",
        name: "Oxygen concentrator",
        variants: "NIL",
        image: itemImage,
        quantity: {
            amount: 45,
            type: "Kg"
        },
        price: 350,
        amount: 2500,
        date: new Date("2024-08-07")
    },
    {
        id: "#28375",
        name: "Patient Monitor",
        variants: "Blue",
        image: itemImage,
        quantity: {
            amount: 30,
            type: "Units"
        },
        price: 300,
        amount: 1500,
        date: new Date("2024-08-07")
    },
    {
        id: "#28376",
        name: "Mechanical ventilator",
        variants: "Blue",
        image: itemImage,
        quantity: {
            amount: 35,
            type: "Units"
        },
        price: 200,
        amount: 1500,
        date: new Date("2024-08-07")
    },
]