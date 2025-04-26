import db from "../../Config/Models.js";

export const allCategories = async (req, res) => {
    const data = await db.category.findAll()
    res.send(data);
}
export const singleCategory = (req, res) => {
    res.send("Get the Single category with id ");
}
export const createCategory = (req, res) => {
    res.send("Create a new category");
}
export const updateCategory = (req, res) => {
    res.send("Update the category with id ");
}
export const deleteCategory = (req, res) => {
    res.send("Delete the category with id ");
}
