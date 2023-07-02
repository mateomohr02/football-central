import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postProduct } from '../../redux/actions/postProduct'
import { resetNewProduct } from '../../redux/actions/resetNewProduct'
import validate from './validateProduct'


const AdminStore = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.userProfile)

    // if (user.role !== 'admin'){
    //     navigate('/404')
    // }
    

    const[newProduct, setNewProduct] = useState({})

    const [errors, setErrors] = useState({
        name: "",
        price: "",
        description: "",
        lifeLength:"",
        sku: "",
        stock: "",
        category: "",
        brand: "",
        image_path: ""
      })

    const handleChange = (e) => {

        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
          })

        setErrors(validate({
            ...newProduct,
            [e.target.name] : e.target.value
          }))
      };

    const handleSubmit = (e,product) => {
        e.preventDefault()
        
        console.log(product, 'PRODUCTO DISPATCH');
        dispatch(postProduct(product))
    }
    useEffect(()=>{
        return () => dispatch(resetNewProduct())
    }, [dispatch])

    const allProduts = useSelector(state => state.store.products)

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
            <input type="text" value={newProduct.name} name='name' onChange={handleChange} placeholder='Nombre'/>
            
            <br />
            <input type="text" value={newProduct.price} name='price' onChange={handleChange} placeholder='Precio'/>
            
            <br />
            <input type="text" value={newProduct.description} name='description' onChange={handleChange} placeholder='Descripción'/>
            
            <br />
            <input type="text" value={newProduct.sku} name='sku' onChange={handleChange} placeholder='SKU'/>
            
            <br />
            <input type="text" value={newProduct.stock} name='stock' onChange={handleChange} placeholder='Stock'/>
            
            <br />
            <input type="text" value={newProduct.category} name='category' onChange={handleChange} placeholder='Categoría'/>
            
            <br />
            <input type="text" value={newProduct.brand} name='brand' onChange={handleChange} placeholder='Marca'/>
            
            <br />
            <input type="text" value={newProduct.image_path} name='image_path' onChange={handleChange} placeholder='URL de la Imágen'/>
            
            <br />

            {newProduct.name === "" ? "" : errors.name && <p>{errors.name}</p>}
            {newProduct.price === "" ? "" : errors.price && <p>{errors.price}</p>}
            {newProduct.description === "" ? "" : errors.description && <p>{errors.description}</p>}
            {newProduct.sku === "" ? "" : errors.sku && <p>{errors.sku}</p>}
            {newProduct.stock === "" ? "" : errors.stock && <p>{errors.stock}</p>}
            {newProduct.category === "" ? "" : errors.category && <p>{errors.category}</p>}
            {newProduct.brand === "" ? "" : errors.brand && <p>{errors.brand}</p>}
            {newProduct.image_path === "" ? "" : errors.image_path && <p>{errors.image_path}</p>}

            <button onClick={(e) => handleSubmit(e, newProduct)}>PUBLICAR</button>
          </form>
        </div>
  )
}

export default AdminStore