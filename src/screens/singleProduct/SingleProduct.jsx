import React, { useEffect, useState } from 'react'
import SingleProductDetails from '../../components/singleProductDetails/SingleProductDetails'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

const SingleProduct = () => {

  const [singleProduct, setSingleProduct] = useState(null)

  // useParams
  const params = useParams()


  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/products/${params.id}`)
      .then((res) => {
        setSingleProduct(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <div className='mt-10'>

        {singleProduct ?
          <SingleProductDetails title={singleProduct.title} image={singleProduct.images} price={singleProduct.price} description={singleProduct.description} id={singleProduct.id} />
          : <h4 className='text-center'>Loading...</h4>}

      </div>
    </>
  )
}

export default SingleProduct