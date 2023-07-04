import React, { useEffect } from "react";
import CartItem from '../../components/CartItem/CartItem'
import { useDispatch, useSelector } from "react-redux";
import { getCartbyUserId, deleteItemCart, clearCart } from "../../redux/actions/action-store";


import "./PaypalButton.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useLocation } from "react-router-dom";


const Cart = () => {
    const location = useLocation()
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
        dispatch(deleteItemCart(userId, productId))
        window.location.reload();
    }

    const handleEmptyCart = () => {
        dispatch(clearCart(userId))
    }

    const handlePayment = () => {
        //lógica back
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
                            totalCompra = totalCompra + (parseFloat(p.price) * p.CartProduct.quantity)
                            return(
                                <tr key={p.id}>
                                    <td>
                                        <img src={p?.image_path} alt={`Imágen de ${p?.name}`} />
                                    </td>
                                    <td>
                                        <p>{p?.name}</p>
                                    </td>
                                    <td>
                                        <p> ${p?.price} x {p?.CartProduct.quantity}</p>
                                    </td>
                                    <td>
                                        {/* Botón para eliminar el ítem */}
                                        <button onClick={() => handleDeleteItem(p?.id)}>
                                            Quitar
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
                    <span>Finalizar Compra</span>
                        <PayPalScriptProvider options={{ "client-id":"AT-UuP_m-l12lYgbpzNTwHUB0O44OeEPBNht2k2wTy5MWiohCg-hcRMImfIs367iukWgQMNud4P1sz1k" }}>
                            <PayPalButtons
                                className="custom-button"
                                style={{ layout: "vertical", height: 55, color: "gold" }}
                                createOrder={() => {
                                return new Promise((resolve, reject) => {
                                    // Aquí debes crear la orden de compra en tu backend y obtener el ID de la orden
                                    // Ejemplo de cómo se podría crear la orden en el backend:
                                    // axios.post("/api/createOrder", { total: totalCompra })
                                    //   .then(response => {
                                    //     const orderId = response.data.orderId;
                                    //     resolve(orderId);
                                    //   })
                                    //   .catch(error => {
                                    //     reject(error);
                                    //   });
                                });
                                }}
                                onApprove={(data, actions) => {
                                // Ejecutar acciones después de que el pago se haya aprobado
                                }}
                                onError={(error) => {
                                // Manejar errores durante el proceso de pago
                                }}
                                onClick={() => handlePayment()}
                            />
                        </PayPalScriptProvider>
                        
            </div>

            
        </div>        
    );
};

export default Cart;