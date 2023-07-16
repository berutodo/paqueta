import Image from "next/image"
import PaquetaSvg from "public/image40.svg"
export function Footer () {
    return(
        <footer>
            <div>

            </div>
            <div className="flex justify-center p-3 items-center bg-[#383838] text-white">
                <span className="uppercase font-semibold">uma empresa do grupo</span>
                <Image className="fill-white" alt="" src={PaquetaSvg} width={265} height={49} />
            </div>
        </footer>
    )
}