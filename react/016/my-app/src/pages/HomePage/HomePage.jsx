import React from 'react'
import { data } from '../../asset/data'
import ProductCard from '../../components/ProductCard/ProductCard'

export default function HomePage() {
  return (
    <>
        {data.map(item => 
                <ProductCard
                    key={item.id} 
                    productName={item.productName}
                    price={item.price}
                    thumbnailImg={item.thumbnailImg}
                />
        )}
    </>
  )
}


