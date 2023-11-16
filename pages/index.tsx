import Image from "next/image"
import adidasImage from "../public/brands/adidas.png"
import bebeceImage from "../public/brands/bebece.png"
import dumondImage from "../public/brands/dumond.png"
import viamarteImage from "../public/brands/viamarte.png"

import shoesImage from "../public/shoesimage.png"
import { Footer } from "../components/Footer"
import { HeaderComponent } from "../components/Head"
import { Highlight } from "../components/Highlight"
export default function Page() {
    return (
      <>
      <HeaderComponent/>
      <div className="relative h-[622] md:w-[1800]">
        <Image src={shoesImage} width={1910} height={622} alt="Imagem com promoção" />
        <div className="absolute top-0 right-0 border-2 md:w-1/3 md:h-2/3 flex flex-col items-start md:p-20">
          <h1>Tênis Casual</h1>
          <p>Masculino</p>
          <div>
            <p>A partir de</p>
            <h1>R$ 79,99</h1>
          </div>
          <button>Aproveite</button>
        </div>
      </div>
      <Highlight />
      <div className="flex flex-col p-8 mb-10 border-2 items-center">
        <h1 className="uppercase">As melhores marcas estão aqui!</h1>
        <div className="flex flex-row items-end md:gap-28">
          <Image width={0} height={0} src={adidasImage} className="w-28 h-20" alt="" />
          <Image width={0} height={0} src={viamarteImage} className="w-52 h-10" alt="" />
          <Image width={0} height={0} src={bebeceImage} className="w-52 h-14" alt="" />
          <Image width={0} height={0} src={dumondImage} className="w-60 h-9" alt="" />
        </div>
      </div>
      <Footer/>
      </>
    )
  }