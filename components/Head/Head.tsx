import Image from "next/image";
import paquetaImage from 'public/paquetahead.svg'
import headphoneSvg from 'public/icons/headphone.svg'
import placeSvg from "public/icons/place.svg"
import heartSvg from "public/icons/heart.svg"
import bagSvg from "public/icons/bag.svg"
import userSvg from "public/icons/user.svg"
import Link from "next/link";
import useCart from "../../hooks/useCart";


export function HeaderComponent (){
    const {cart} = useCart()
    return (
        <header>
            <div className="bg-[#FF8A29] p-2 text-white flex justify-around">
                <span>Loja de Calçados e Moda Online</span>
                <div className="flex flex-row gap-6">
                    <span className="flex flex-row gap-2"><Image src={headphoneSvg} width={16} height={16} alt="headphone" /><a>Fale conosco</a></span>
                    <span className="flex flex-row gap-2"><Image src={placeSvg} width={16} height={16} alt="place" /><a>Encontrar uma loja fisica</a></span>
                </div>
            </div>
            <div>
                <div className="flex justify-around p-6 items-center">
                    <Link href={"/"}><Image src={paquetaImage} width={297} height={86} alt="Paqueta"/></Link> 
                    <div className="flex flex-row gap-6">
                        <span className="flex flex-row items-end gap-2"><Image src={heartSvg} width={28} height={27} alt="heart" /><span className="flex justify-center items-center relative bottom-5 right-4 min-w-max w-4 h-4 rounded-xl bg-orange-400 text-white"></span><a>Lista de desejo</a></span>
                        
                        <span className="flex flex-row items-end gap-2"><Image src={bagSvg} width={28} height={27} alt="bag" />
                        {cart.length > 0 && <span className="flex justify-center items-center relative bottom-5 right-4 min-w-max w-4 h-4 rounded-xl bg-orange-400 text-white"><p>{cart.length}</p>
                        </span>}<a>Sacola</a></span>
                        

                        <span className="flex flex-row items-end gap-2"><Image src={userSvg} width={28} height={27} alt="login" /><a>Entrar</a></span>

                    </div>
                </div>
                <div className="flex text-black font-medium text-lg justify-around">
                    <a>Novidades</a>
                    <a>Feminino</a>
                    <a>Masculino</a>
                    <a>Paquetá Esportes</a>
                    <a>Outlet</a>
                    <a>Cashback</a>
                </div>
            </div>
        </header>
    )
}