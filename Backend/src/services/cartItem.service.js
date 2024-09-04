
const CartItem = require('../models/cartItem.model');
const userService = require('../services/user.service.js')


async function updateCartItem( userId , cartItemId , cartItemData)
{
    try
    {
        const item = await findCartItemById(cartItemId)

        if( !item )
        {
            throw new Error("Cart item with ID not found : ", cartItemId );
        }

        const user = await userService.findUserById(item.userId)

        if( !user )
        {
            throw new Error("User with ID not found : ", userId);
        }

        if( user._id.toString() == userId._id.toString())
        {
            item.quantity = cartItemData.quantity ; 
            item.price = item.quantity * item.product.price ; 
            item.discountedPrice = item.quantity * item.product.discountedPrice ; 
            
            const updatedCartItem = await item.save()

            return updatedCartItem ; 
           
        }
        else 
        {
            throw new Error('Unauthorized: You do not have permission to update this cart item.');
        }
    }
    catch(error)
    {
        console.error('Error updating cart item:', error.message);
        throw new Error('There was an issue updating the cart item. Please try again later.');
    }
}


async function removeCartItem(userId , cartItemId) 
{

    const cartItem = await findCartItemById(cartItemId)
    const user = await userService.findUserById(userId)

    if (user._id.toString() === cartItem.userId.toString()) {
        return await CartItem.findByIdAndDelete(cartItemId);
    } else {
        throw new Error('Unauthorized: You do not have permission to remove this cart item.');
    }

}


async function findCartItemById( cartItemId )
{
    const cartItem = await CartItem.findById(cartItemId).populate("product")

    if( cartItem )
    {
        return cartItem
    }
    else
    {
        throw new Error("CartItem not found with ID : " , cartItemId);
    }
}


module.exports = { updateCartItem , removeCartItem , findCartItemById }
