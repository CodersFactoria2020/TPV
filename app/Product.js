module.exports = class Product
{
    constructor(name, price, quantity, category)
    {
        this.name     = name;
        this.price    = price;
        this.quantity = quantity;
        this.category = category;
    }

    getName(product)
    {
       return this.name;
    }
    getPrice(product)
    {
        return this.price;
    }
    getQuantity(product)
    {
        return this.quantity;
    }
    getCategory(product)
    {
        return this.category;
    }
}