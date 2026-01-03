import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';

const ProductItem = ({ id, title, image, price }) => {
    
    const { currency } = useContext(ShopContext);
  
    return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img className='hover:scale-110 transition ease-in-out' src={image} />
      </div>
      <p className='pt-3 pb-1 text-sm'>
        {title}
      </p>
      <p className='pt-3 pb-1 font-bold font-paragraph'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
