import { useEffect, useState } from "react"

export function useFetchProducts (url) {
    const [products, setProducts ] = useState([])
    const [loading, setLoading ] = useState(true)
    const [error, setError ] = useState(null)

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch(url)
            const json  = await response.json()
            setProducts(json.products)
        } catch (err) {
            setError(error.message)
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        fetchData()
    },[url])

    return { products, loading, error}
}