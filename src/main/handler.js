export const getProducts = async () => {
    const res = await global.dbclient.query('select * from products');
    return res.rows;
}

export const getProductsType = async (event, id) => {
    const res = await global.dbclient.query('select * from products_type where id = $1', [id]);
    return res.rows[0];
}