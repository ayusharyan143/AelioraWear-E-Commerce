const Category = require("../models/category.model");
const Product = require("../models/product.model");


async function createProduct(reqData) {
    let topLevel = await Category.findOne({ name: reqData.topLevelCategory });

    if (!topLevel) {
        topLevel = new Category({
            name: reqData.topLevelCategory,
            level: 1
        })

    }


    await topLevel.save();

    let secondLevel = await Category.findOne({
        name: reqData.secondLevelCategory,
        parentCategory: topLevel._id,
    })

    if (!secondLevel) {
        secondLevel = new Category({
            name: reqData.secondLevelCategory,
            parentCategory: topLevel._id,
            level: 2
        })
    }

    await secondLevel.save();


    let thirdLevel = await Category.findOne({
        name: reqData.thirdLevelCategory,
        parentCategory: secondLevel._id
    })

    if (!thirdLevel) {
        thirdLevel = new Category({
            name: reqData.thirdLevelCategory,
            parentCategory: secondLevel._id,
            level: 3
        })
    }

    await thirdLevel.save();

    const product = new Product({

        title: reqData.title,
        color: reqData.color,
        description: reqData.description,
        discountedPrice: reqData.discountedPrice,
        discountPercent: reqData.discountPercent,
        imageUrl: reqData.imageUrl,
        brand: reqData.brand,
        price: reqData.price,
        sizes: reqData.sizes,
        quantity: reqData.quantity,
        category: thirdLevel._id,

    })

    return await product.save();

}


async function deleteProduct(productId) {
    const product = await findProductById(productId)

    await Product.findByIdAndDelete(productId)
    return "Product deleted Successfully"
}

async function updateProduct(productId, reqData) {
    return await Product.findByIdAndUpdate(productId, reqData)
}

async function findProductById(id) {
    const product = await Product.findById(id).populate("category").exec()

    if (!product) {
        throw new Error("Product not found with id " + id)
    }

    return product;
}


async function getAllProducts(reqQuery) {
    let { category, color, sizes, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize } = reqQuery;

    pageSize = parseInt(pageSize) || 10;
    pageNumber = parseInt(pageNumber) || 1;

    // Start with a basic query
    let query = Product.find().populate("category");

   
    // Handle color filtering
    if (color) {
        const colorSet = new Set(color.split(",").map(c => c.trim().toLowerCase()));
        const colorRegex = colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;
        if (colorRegex) {
            query = query.where("color").regex(colorRegex);
        }
    }

    

    // Handle sizes filtering
    if (sizes) {
        const sizesSet = new Set(sizes.split(",").map(s => s.trim()));
        if (sizesSet.size > 0) {
            query = query.where("sizes").in([...sizesSet]);
        }
    }

    // Handle price range filtering
    if (minPrice && maxPrice) {
        query = query.where('discountedPrice').gte(minPrice).lte(maxPrice);
    }
    

    if (minDiscount) {
        query = query.where('discountPercent').gte(minDiscount);

    }

    if (category) {
        const existCategory = await Category.findOne({ name: category });
        if (existCategory) {
            query = query.where("category").equals(existCategory._id);
        } else {
            return { content: [], currentPage: pageNumber, totalPages: 0 };
        }
    }



    // Handle stock availability filtering
    if (stock) {
        if (stock === "in_stock") {
            query = query.where("quantity").gt(0);
        } else if (stock === "out_of_stock") {
            query = query.where("quantity").lte(0);
        }
    }

    // Handle sorting
    if (sort) {
        const sortDirection = sort === "price_height" ? -1 : 1;
        query = query.sort({ discountedPrice: sortDirection });
    }

    // Get total product count before pagination
    const totalProducts = await Product.countDocuments(query.getQuery());

    // Apply pagination
    const skip = (pageNumber - 1) * pageSize;
    query = query.skip(skip).limit(pageSize);

    // Execute query and fetch results
    const products = await query.exec();
    const totalPages = Math.ceil(totalProducts / pageSize);

    

    return { content: products, currentPage: pageNumber, totalPages };
}



async function createMultipleProduct(products) {
    for (let product of products) {
        await createProduct(product);
    }
}

module.exports = { createProduct, deleteProduct, updateProduct, getAllProducts, findProductById, createMultipleProduct }


