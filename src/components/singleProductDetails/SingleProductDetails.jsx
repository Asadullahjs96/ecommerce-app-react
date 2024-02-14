import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../config/redux/reducers/cartSlice'
import Swal from 'sweetalert2'


const SingleProductDetails = ({ image, title, description, price, id }) => {

  // UseSelector
  const selector = useSelector(state => state.cartItems.cartItems)

  // UseDispatch
  const dispatch = useDispatch()


  // Adding Product In Redux Cart
  const productAddToCart = () => {

    axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => {

        if (selector.length === 0) {

          // Product Addedd to Redux cart
          dispatch(addToCart({
            title: res.data.title,
            price: res.data.price,
            description: res.data.description,
            image: res.data.images,
            id: res.data.id
          }))

          // Sweet Alert
          Swal.fire({
            title: "Product added in your card",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });
        }
        else {
          let productAlreadyExist = false

          // Checking Product Exist in Cart or Not
          selector.map((item) => {

            if (item.id === res.data.id) {
              productAlreadyExist = true
            }
          })

          if (productAlreadyExist) {

            Swal.fire({
              title: "Product already in your cart",
              width: 600,
              padding: "3em",
              color: "#716add",
              background: "#fff url(/images/trees.png)",
              backdrop: `
                rgba(0,0,123,0.4)
                url("/images/nyan-cat.gif")
                left top
                no-repeat
              `
            });
            
          }
          else {

            // Product Addedd to Redux
            dispatch(addToCart({
              title: res.data.title,
              price: res.data.price,
              description: res.data.description,
              image: res.data.images,
              id: res.data.id
            }))

            // Sweet Alert
            Swal.fire({
              title: "Product added in your card",
              width: 600,
              padding: "3em",
              color: "#716add",
              background: "#fff url(/images/trees.png)",
              backdrop: `
                rgba(0,0,123,0.4)
                url("/images/nyan-cat.gif")
                left top
                no-repeat
              `
            });
          }

        }

      })
      .catch((err) => {
        console.log(err);
      })
  }


  return (
    <>
      {/* Product Details Card */}
      <div className='flex justify-center my-10'>
        <div className="card card-side w-[80%] rounded-xl bg-base-200 shadow-xl">
          <div className='w-[30%] p-6 rounded-lg'>
            <figure><img src={image} alt="Movie" /></figure>
          </div>
          <div className="card-body w-[70%]">
            <h2 className="card-title"> {title} </h2>
            <h4 className="card-title"> {price}$ </h4>
            <p> {description} </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={productAddToCart} > Add to Cart </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProductDetails