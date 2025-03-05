import './app.css'
import { useState } from "react"
import ProductCard from "./components/productCard"
import PaginationComponent from "./components/paginationComponent"
import { ITEMS_PER_PAGE } from "./constants/constants"
import { useFetchProducts } from "./customHook/useFetchProducts"

export default function App () {
  const [currentPage, setCurrentPage] = useState(0)
  const { products, loading, error } = useFetchProducts("https://dummyjson.com/products")
  
  const totalProducts = products.length
  const noOfPages = Math.ceil(totalProducts / ITEMS_PER_PAGE);
  const start = currentPage * ITEMS_PER_PAGE
  const end = start + ITEMS_PER_PAGE
  
  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Error: {error.message}</h1>
  if(!products) return <h1>No data present</h1>
  
  return (
    <div>
      <h1>Pagination</h1>
      <PaginationComponent 
        setCurrentPage = {setCurrentPage}
        currentPage = {currentPage}
        noOfPages = {noOfPages}
      />
      <div className="productContainer">
        { products.slice(start, end).map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}