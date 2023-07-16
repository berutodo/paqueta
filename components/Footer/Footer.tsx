import Image from "next/image"
import PaquetaSvg from "public/image40.svg"
export function Footer () {
    return(
        <footer>
            <div className="flex gap-8">
                <div className="text-sm text-[#383838]">
                    <h1 className="text-black text-lg">Institucional</h1>
                    <p>Quem Somos</p>
                    <p>Nossas Lojas</p> 
                    <p>Soluções Corporativas</p> 
                    <p>Política de Privacidade</p>
                    <p>Contrato de Compra e Venda</p>
                    <p>Crédito Pessoal</p>
                </div>
                <div className="text-sm text-[#383838]">
                    <h1 className="text-black text-lg">Ajuda e Suporte</h1>
                    <p>Troca e Devolução</p>
                    <p>2ª Via do Boleto</p>
                    <p>Detalhamento de Fatura</p>
                    <p>Entregas</p>
                    <p>Meus Pedidos</p>
                    <p>Dúvidas Frequentes</p>
                    <p>Status do Pedido</p>
                </div>
                <div className="text-sm text-[#383838]">
                    <div>
                        <h1 className="text-black text-lg">Atendimento</h1>
                        <p>Fale Conosco</p>
                    </div>
                    <div>
                        <h1 className="text-black text-lg">Endereço</h1>
                        <p>Rua Antonio Frederico Ozanan, 2601 Canoas - RS | CNPJ: 01.098.983/0175-02</p> 
                    </div>
                    <div>
                        <h1 className="text-black text-lg">Trabalhe Conosco</h1>
                        <a href="">Venha crescer com a Paquetá!</a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center p-3 items-center bg-[#383838] text-white">
                <span className="uppercase font-semibold">uma empresa do grupo</span>
                <Image className="fill-white" alt="" src={PaquetaSvg} width={265} height={49} />
            </div>
        </footer>
    )
}