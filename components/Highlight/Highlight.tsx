import Image from "next/image";
import { useEffect, useState } from "react";
import { Product } from "./Highlight.types";

export function Highlight () {
    type myProduct = Product[]
    const [shoesData, setShoesData] = useState<myProduct>([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.brchallenges.com/api/paqueta/shoes');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setShoesData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetch function
    fetchData();
  }, []);
    return (
        <>
           {shoesData.map((e): any => <Image alt="" src={e.image} width={100} height={50} />)}
        </>
    )
}