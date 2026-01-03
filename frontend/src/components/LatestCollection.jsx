import React, {useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/shopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {

    const { products } = useContext(ShopContext)
    const [ latestProducts, setLatestProducts ] = useState([]);

    useEffect(() => {
      setLatestProducts(products.slice(0, 10))
    }, [products])

  return (
    <div>
      <div className="my-10">
        <div className="text-center py-8 text-3xl">
          <Title text1={'Latest'} text2={'Products'}/>
          <p className="font-paragraph w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Products */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 gap-y-6">
          {
            latestProducts.map((e, i) => (
              <ProductItem key={i} id={e.id} title={e.title} image={e.image} price={e.price}/>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default LatestCollection
