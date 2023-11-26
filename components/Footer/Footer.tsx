import Image from "next/image"
import PaquetaSvg from "public/image40.svg"

import BoletoSVG from "public/icons/payment/boleto.svg"
import ItauSVG from "public/icons/payment/itau.svg"
import VisaSVG from "public/icons/payment/visa.svg"
import EloSVG from "public/icons/payment/elo.svg"
import MastercardSVG from "public/icons/payment/mastercard.svg"

import InstagramSVG from "public/icons/socials/instagram.svg"

export function Footer () {
    return(
        <footer>
            <div className="flex flex-col sm:flex-row mt-10 gap-8">
                <div className="text-sm text-[#383838] flex flex-col cursor-auto">
                    <h1 className="text-black text-lg">Institucional</h1>
                    <a href="#">Quem Somos</a>
                    <a href="#">Nossas Lojas</a> 
                    <a href="#">Soluções Corporativas</a> 
                    <a href="#">Política de Privacidade</a>
                    <a href="#">Contrato de Compra e Venda</a>
                    <a href="#">Crédito Pessoal</a>
                </div>
                <div className="text-sm text-[#383838] flex flex-col cursor-auto">
                    <h1 className="text-black text-lg">Ajuda e Suporte</h1>
                    <a href="#">Troca e Devolução</a>
                    <a href="#">2ª Via do Boleto</a>
                    <a href="#">Detalhamento de Fatura</a>
                    <a href="#">Entregas</a>
                    <a href="#">Meus Pedidos</a>
                    <a href="#">Dúvidas Frequentes</a>
                    <a href="#">Status do Pedido</a>
                </div>
                <div className="text-sm text-[#383838] flex flex-col cursor-auto">
                    <div>
                        <h1 className="text-black text-lg">Atendimento</h1>
                        <a href="#">Fale Conosco</a>
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
                <div>
                    <div>
                        <h1 className="text-black text-lg">Formas de pagamento</h1>
                        <div className="grid grid-cols-3 gap-4">
                            <Image alt="Boleto" src={BoletoSVG} width={33} height={33} />
                            <Image alt="Itau" src={ItauSVG} width={33} height={33} />
                            <Image alt="Visa" src={VisaSVG} width={45} height={16} />
                            <Image alt="Elo" src={EloSVG} width={45} height={16} />
                            <Image alt="Mastercard" src={MastercardSVG} width={45} height={16} />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-black text-lg">Redes Sociais</h1>
                        <div>
                            <Image width={25} height={25} src={InstagramSVG} alt="Instagram" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center p-3 items-center bg-[#383838] text-white">
                <span className="uppercase font-semibold">uma empresa do grupo</span>
                <Image alt="" src={PaquetaSvg} width={265} height={49} />
            </div>
        </footer>
    )
}