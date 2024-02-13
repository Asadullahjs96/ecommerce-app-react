import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCartItem } from '../../config/redux/reducers/cartSlice'

const CartProduct = () => {

    // UseSelector
    const selector = useSelector(state => state.cartItems.cartItems)

    // UseDispatch
    const dispatch = useDispatch()

    // Delete Items From Cart
    const dltCartItem = (index) => {
        console.log(index);
        dispatch(removeCartItem({
            index: index
        }))
    }


    return (
        <>
            <div className='mt-10 p-20'>
                <h1 className='text-3xl font-bold text-blue-700 font-sans'> Items in Your Shopping Cart </h1>

                {selector.length > 0 ? selector.map((item, index) => {


                    return <div key={item.id} className="card card-side bg-base-100 shadow-xl mt-5">
                        <figure><img src={item.image} className='w-32 p-4' alt="product-image" /></figure>
                        

                        <div className="card-body">
                            <h2 className="card-title">{item.title.slice(0, 20)}...</h2>
                            <h2>{item.price}</h2>
                            <p>{item.description.slice(0, 50)}...</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => dltCartItem(index)} className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    </div>


                }) : <h1 className='mt-20 text-2xl font-mono text-blue-400'> Nothing in Your Cart Yet </h1>}
            </div>
            

        </>
        
    )
}

export default CartProduct