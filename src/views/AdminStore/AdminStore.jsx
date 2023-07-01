import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postProduct } from '../../redux/actions/postProduct'
import { resetNewProduct } from '../../redux/actions/resetNewProduct'

const AdminStore = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.userProfile)

    // if (user.role !== 'admin'){
    //     navigate('/404')
    // }
    const allProduts = useSelector(state => state.store.products)

    const[newProduct, setNewProduct] = useState({})

    const handleChange = (e) => {
        setNewProduct(e.target.name = e.target.value)
        console.log(newProduct);
    }

    const handleSubmit = (e) => {
        console.log(newProduct);
        //dispatch(postProduct())
    }

    useEffect(()=>{
        return () => dispatch(resetNewProduct())
    }, [dispatch])

    return (
      <div>
          {allProduts ? allProduts.map(p => {
              return (
                  <div>
                      Producto
                  </div>
              )
          }): <span>No existen productos</span>}
          <br />
          <h3>Nuevo Producto</h3>
          <form>
            <input type="text" value={newProduct.name} name='name' onChange={handleChange}/>
            <br />
            <input type="text" value={newProduct.price} name='price' />
            <br />
            <input type="text" value={newProduct.description} name='description' />
            <br />
            <input type="text" value={newProduct.sku} name='sku' />
            <br />
            <input type="text" value={newProduct.stock} name='stock' />
            <br />
            <input type="text" value={newProduct.category} name='category' />
            <br />
            <input type="text" value={newProduct.brand} name='brand' />
            <br />
            <input type="text" value={newProduct.image_path} name='image_path' />
            <br />
            
            <button onClick={() => handleSubmit}>PUBLICAR</button>
          </form>
        </div>
  )
}

export default AdminStore