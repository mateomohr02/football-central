import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProducts } from '../../redux/actions/action-store'
import { useNavigate } from 'react-router-dom'

const StoreManagerAdmin = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const allProduts = useSelector(state => state.store.products)

    console.log(allProduts, 'PRODUCTOS');

  return (
    <div>
        {allProduts !== [] ? allProduts.map(p => {
            return (
                <div>
                    Producto
                </div>
            )
        }): <span>No existen productos</span>}
        <br />
        <button onClick={() => navigate('/admin/addProducts')}>Agregar inventario</button>
    </div>
  )
}

export default StoreManagerAdmin