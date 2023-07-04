import React, { useEffect } from "react";
import CartItem from '../../components/CartItem/CartItem'
import { useDispatch, useSelector } from "react-redux";
import { getCartbyUserId, deleteItemCart, clearCart } from "../../redux/actions/action-store";

const Cart = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.userProfile)
    const userId = user.id

    useEffect(()=>{
        if (userId) dispatch(getCartbyUserId(userId))      
    }, [dispatch, userId])

    const cartItems = useSelector(state => state.store.cart)
    
    let products = cartItems?.Products
    //const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    let totalCompra = 0


    const handleDeleteItem = (productId) => {
        dispatch(deleteItemCart(productId))
        products = products.map(p => p.id !== productId)
    }

    const handleEmptyCart = () => {
        dispatch(clearCart(userId))
    }

    return(
        <div>

            <div>
                <thead>
                    <tr>
                            <p>Producto</p>

                            <p>Precio</p>                        
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map(p =>{
                            totalCompra = totalCompra + parseFloat(p.price)
                            return(
                                <tr key={p.id}>
                                    <td>
                                        <img src={p?.image_path} alt={`Imágen de ${p?.name}`} />
                                    </td>
                                    <td>
                                        <p>{p?.name}</p>
                                    </td>
                                    <td>
                                        <p> ${p?.price}</p>
                                    </td>
                                    <td>
                                        {/* Botón para eliminar el ítem */}
                                        <button onClick={() => handleDeleteItem(p?.id)}>
                                            X
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {products ? <button onClick={()=> handleEmptyCart()}>Vaciar Carrito</button> : ''}
                    <tr>
                        <td>
                            <p>TOTAL: ${totalCompra}</p>
                        </td>
                    </tr>
                </tbody>
            </div>

            
        </div>        
    );
};

export default Cart;