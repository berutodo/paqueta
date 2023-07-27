import Image from "next/image";
import { useEffect, useState } from "react";

export function Highlight () {
    const [shoesData, setShoesData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
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