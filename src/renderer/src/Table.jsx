import { useEffect, useState } from "react";

const Table = ({data}) => {
    const {id, id_product_type, prd_name, articule, min_price, main_material} = data;

    const [productsType, setProductsType] = useState('');

    useEffect(() => {
        const getProductsType = async () => {
            const data = await window.api.getProductsType(id_product_type);
            console.log(data)
            setProductsType(data.prd_type)
        }
        getProductsType();
    }, [])

    return <>
        <div className="table" >
            <div className="table-info">
                <div>
                    {productsType} | {prd_name}
                </div>
                <div>{articule}</div>
                <div>{min_price}</div>
                <div>{main_material}</div>
            </div>
        </div>
    </>
}

export default Table;