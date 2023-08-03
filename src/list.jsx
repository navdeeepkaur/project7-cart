import { useEffect, useState } from 'react';
import {items} from './data';
import Cart from './cart';
import './list.css';

export default function List(){

    const [data, setData]=useState([]);
    const [total, setTotal]=useState(0);

    const handleChange = (item, change) => {
        let ind = -1;
        data.forEach((indata, index) => {
          if (item.name === indata.name) {
            ind = index;
          }
        })
        const temp = data;
        temp[ind].quantity += change;
        if (temp[ind].quantity === 0) {
          temp[ind].quantity = 1;
        }
        setData([...temp]);
      }

    const handleClick=(i)=>{
        if(!data.includes(i))
        {
            setData((prev)=>[...prev, i]);   
        }
    }

    const handleDelete=(name)=>{
        const temp=data.filter((item)=>{
            console.log(data);
            return item.name!==name;
        })
        setData(temp);
    }

    const handleCheckout=()=>{
        setData([]);
    }

    useEffect(()=>{
        var temp=0;
        {data.forEach((product)=>{
            temp=temp+(product.quantity*product.price)
        })}
        setTotal(temp);
    },[data])

    return(
        <div className='list'>
            <div className='left'>
                {items.map((item)=>
                    <div className='single'>
                        <div className='image'>
                            <img src={item.image} alt="" />
                        </div>
                        <div className='content'>
                            <span className='name'>{item.name}</span>
                            <span className='price'>{item.desc}</span>
                            <span className='name item-price'>₹{item.price}</span>
                        </div>
                        <button className="add" onClick={()=>handleClick(item)}>Add To Cart</button>
                    </div>
                )}
            </div>
            <div className='right'>
                <Cart item={data} fnc={handleChange} delete={handleDelete} total={total} length={data.length} checkout={handleCheckout}/>
            </div>
        </div>
    )
}