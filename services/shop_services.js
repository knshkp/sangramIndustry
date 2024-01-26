const Product=require(`../models/product_model`)
const addProduct=async(data)=>{
    const product=data;
    const newProduct=new Product({
        name:product.name,
        price:product.price,
        discount:product.discount,
        category_id:product.category_id,
        description:product.description,
        productImage:product.link
    }) 
    const result=await newProduct.save()
    return result;
}
modules.export={
    addProduct

}