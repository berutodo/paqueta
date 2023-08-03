import Image from "next/image"
import PaquetaSvg from "public/image40.svg"
import { Highlight } from "../Highlight"
export function Footer () {
    return(
        <footer>
            <Highlight/>
            <div className="flex gap-8">
                <div className="text-sm text-[#383838] flex flex-col cursor-auto">
                    <h1 className="text-black text-lg">Institucional</h1>
                    <a href="#">Quem Somos</a>
                    <a href="#">Nossas Lojas</a> 
                    <a href="#">Soluções Corporativas</a> 
                    <a href="#">Política de Privacidade</a>
                    <a href="#">Contrato de Compra e Venda</a>
                    <a href="#">Crédito Pessoal</a>
                </div>
                <div className="text-sm text-[#383838]">
                    <h1 className="text-black text-lg">Ajuda e Suporte</h1>
                    <a href="#">Troca e Devolução</a>
                    <a href="#">2ª Via do Boleto</a>
                    <a href="#">Detalhamento de Fatura</a>
                    <a href="#">Entregas</a>
                    <a href="#">Meus Pedidos</a>
                    <a href="#">Dúvidas Frequentes</a>
                    <a href="#">Status do Pedido</a>
                </div>
                <div className="text-sm text-[#383838]">
                    <div>
                        <h1 className="text-black text-lg">Atendimento</h1>
                        <a>Fale Conosco</a>
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