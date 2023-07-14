export function HeaderComponent (){
    return (
        <header>
            <div className="bg-orange-400 flex justify-around">
                <span>Loja de Calçados e Moda Online</span>
                <div className="flex flex-row gap-6">
                    <span><h1>Fale conosco</h1></span>
                    <span><h1>Encontrar uma loja fisica</h1></span>
                </div>
            </div>
            <div>
                <div className="flex justify-around h-16 items-center">
                    <span>Paqueta</span>
                    <div className="flex flex-row gap-6">
                        <span><h1>Lista de desejo</h1></span>
                        <span><h1>Sacola</h1></span>
                        <span><h1>Entrar</h1></span>

                    </div>
                </div>
                <div className="flex justify-around">
                    <span>Novidades</span>
                    <span>Feminino</span>
                    <span>Masculino</span>
                    <span>Paquetá Esportes</span>
                    <span>Outlet</span>
                    <span>Cashback</span>
                </div>
            </div>
        </header>
    )
}