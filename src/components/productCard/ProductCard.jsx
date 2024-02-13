import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ProductCard = ({ title, price, description, image, id }) => {


  // UseNavigate
  const navigate = useNavigate()

  // Navigate to Show Product Details
  const showProductDetails = (id) => {
    navigate(`/products/${id}`)
  }


  return (
    <>
      <div onClick={() => showProductDetails(id)} className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="product-image" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title.slice(0, 20)}</h2>
          <h2 className='font-semibold '> {price}$ </h2>
          <p>{description.slice(0, 50)}...</p>
          <div className="card-actions">
            <button className="btn btn-primary">Show Product</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard