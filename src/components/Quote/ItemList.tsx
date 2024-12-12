import React, { ChangeEvent, ChangeEventHandler } from 'react'
import { dummyItems, ItemRow } from './data'
import { formatCurrency } from '../../utils/helper';

const ItemList: React.FC = () => {

    const checkAll: ChangeEventHandler<HTMLInputElement> = (event: ChangeEvent<HTMLInputElement>) => {
        document.querySelectorAll<HTMLInputElement>(".itemCheck")?.forEach((e) => {
            e.checked = event.target.checked;
        });
    };

    return (
        <div className='itemList'>
            <h5>Item(s)</h5>
            <div className='itemListTable'>
                <div className='itemTableRow'>
                    {
                        ItemRow?.map((row) => <span key={row} className={row}>{row === "Items" && <input onChange={checkAll} type="checkbox" name="" id="" />} {row}</span>)
                    }
                </div>
                <div className='itemTableColumn'>
                    {
                        dummyItems?.map((item) => (
                            <div key={item.id}>
                                <div>
                                    <input className='itemCheck' type="checkbox" />
                                    <img src={item?.image} alt="" />
                                    <div>
                                        <h6>{item?.name}</h6>
                                        <p>{item?.id}</p>
                                    </div>
                                </div>
                                <span>{item?.variants}</span>
                                <span>{item?.quantity.amount} {item?.quantity?.type}</span>
                                <span>{formatCurrency("en-US", "USD", item.price)}</span>
                                <span>{formatCurrency("en-US", "USD", item.amount)}</span>
                                <span className='dateDiv'>{item?.date?.toDateString()}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='itemListTotal'>
                <div>
                    <h5>Sub Total</h5>
                    <h5>{formatCurrency("en-US", "USD", 8000)}</h5>
                </div>
                <div>
                    <h5>Total</h5>
                    <h4>{formatCurrency("en-US", "USD", 8750)}</h4>
                </div>
            </div>
        </div>
    )
}

export default ItemList