import Image from "next/image"
import useCart from "../hooks/useCart"
import deleteSVG from "../public/icons/delete.svg"
export default function Checkout (){
    const {cart,addItemToCart, removeItemFromCart} = useCart()
    const [productIds] = cart.map( e => e.productId)
    return(
        <main>
            {cart.length}
            <button onClick={() => addItemToCart("123132", 10)}>Adicionar item</button>
            <h1>Sacola de compras</h1>
            {cart.map(e => (
            <div className="w-96 h-44 border-2">
                <p>Id do produto : {e.productId}</p><p>Quantidade: {e.quantity}</p>
                <button onClick={() => removeItemFromCart(e.productId)}><span><Image width={25} height={25} src={deleteSVG} alt="" /></span></button>
            </div>
            ))}
        </main>
    )
}