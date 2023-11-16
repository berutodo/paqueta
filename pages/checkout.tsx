import Image from "next/image"
import useCart from "../hooks/useCart"
import deleteSVG from "../public/icons/delete.svg"
import Link from "next/link"
export default function Checkout (){
    const {cart, removeItemFromCart} = useCart()
    return(
        <main className="m-auto w-4/5 sm:w-3/5 flex flex-col md:p-20">
            <h1 className="font-bold">Sacola de compras</h1>
            <div className="m-auto w-full flex flex-col gap-3 items-center p-20 bg-[#f9f9f9]">
                {cart.length == 0 && (<>
                    <h1>Aparentemente seu carrinho está vazio</h1>
                    <Link className="w-56 text-center p-2 rounded-md bg-orange-400 text-white font-bold border-2" href="/">Voltar às compras</Link>
                </>)}
            {cart.map(e => (
            <div className="h-44 w-full border-b-2">
                <p>Id do produto : {e.productId}</p><p>Quantidade: {e.quantity}</p>
                <button onClick={() => removeItemFromCart(e.productId)}><span><Image width={25} height={25} src={deleteSVG} alt="" /></span></button>
            </div>
            ))}
            </div>
            
        </main>
    )
}