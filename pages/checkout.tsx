import Image from "next/image"
import useCart from "../hooks/useCart"
import deleteSVG from "../public/icons/delete.svg"
export default function Checkout (){
    const {cart, removeItemFromCart} = useCart()
    return(
        <main>
            {cart.length}
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