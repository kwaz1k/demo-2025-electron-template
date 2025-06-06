import { useEffect, useState } from "react"
import Table from "./Table"


const Tables = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        const geetData = async () => {
            const data = await window.api.getProducts()
            setProducts(data)
        }
        geetData();
    }, [])
    console.log(products)
    return <>
        <div className="tables">
            {products?.map((el) => {
                return (<Table key={el.id} data={el}/>)
                })}
        </div>
    </>
}

export default Tables;