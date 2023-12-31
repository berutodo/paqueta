import Image from "next/image";
import { useEffect, useState } from "react";
import { Product } from "../types/Highlight.types";
import { Carousel } from '@mantine/carousel';
import Link from "next/link";

export function Highlight () {
    type myProduct = Product[]
    const [shoesData, setShoesData] = useState<myProduct>([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.brchallenges.com/api/paqueta/shoes');
        const data = await response.json();
        setShoesData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  
    return (
        <div className="w-2/3 mx-auto">
          <Carousel
          withIndicators={true}
          height={412}
          slideSize="25%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={2}
        >
          {shoesData.map((e, index): any => <Carousel.Slide>
            <div key={index} className="w-[307px] h-[412px] shadow-lg drop-shadow-md flex flex-col items-center text-left p-2">
              <Image alt="" src={e.image} width={210} height={149} />
              <div className="w-3/4">
                <h1 className="text-lg">{e.name}</h1>
                <p>R$ {e.price.value}</p>
              </div>
              <Link className="bottom-8 absolute uppercase flex justify-center w-3/4 p-1 rounded-sm bg-orange-400 text-white font-semibold" href={{
                pathname: "/product/[id]",
                query: {id : e.id},
              }}>comprar</Link>
              </div>
            </Carousel.Slide>)}
        </Carousel>
           
        </div>
    )
}