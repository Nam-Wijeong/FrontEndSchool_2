import React from 'react'
import ProductImage from '../ProductImage/ProductImage'
import ProductName from '../ProductName/ProductName'
import ProductPrice from '../ProductPrice/ProductPrice'

export default function ProductCard({productName, price, thumbnailImg}){
    return (
        <>
            <ProductImage thumbnailImg={thumbnailImg} productName={productName}/>
            <ProductName productName={productName}/>
            <ProductPrice price={price}/>
        </>
    )
}
