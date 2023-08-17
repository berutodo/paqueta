import useCart from "../hooks/useCart"
export default function Checkout (){
    const {cart,addItemToCart, removeItemFromCart} = useCart()
    return(
        <main>
            {cart.length}
            <button onClick={() => addItemToCart("123132", 10)}>Adicionar item</button>
            <h1>Sacola de compras</h1>
            {cart.map(e => (
            <>
            <p>Id do produto : {e.productId}</p><p>Quantidade: {e.quantity}</p>
            <button onClick={() => removeItemFromCart(e.productId)}>Remover item do carrinho</button>
            </>))}
        </main>
    )
}