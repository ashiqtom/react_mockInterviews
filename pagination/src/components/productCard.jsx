
function ProductCard({product}) {
  return (
    <div className='productCard'>
        <img 
          src={product.images[0]} 
          alt="image" 
          className="product_image"
        />
        <span>{product.title}</span>
    </div>
  )
}

export default ProductCard