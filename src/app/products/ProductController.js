export const allProducts = (req, res) => {
    res.send("All products");
}
export const singleProduct = (req, res) => {
    res.send("Get the Single product with id ");
}
export const createProduct = (req, res) => {
    const body = req.body;
    res.json(body);
}
export const updateProduct = (req, res) => {
    res.send("Update the product with id ");
}
export const deleteProduct = (req, res) => {
const {id} = req.params;
console.log("Delete ID NO:", id);
        res.send(`Delete the product with id ${id}`);
}
