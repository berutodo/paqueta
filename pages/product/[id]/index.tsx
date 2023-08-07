import { GetStaticPaths } from "next";
import Image from "next/image";

interface Price {
  value: number;
  discount: number;
}
interface Product {
  id: string;
  name: string;
  price: Price;
  soldout: boolean;
  image: string;
  description: string;
}

export default function Page({ params, dataFetch}: { params: { id: string, data: string[] }, dataFetch: Product }) {
    console.log(params.id)
    console.log(dataFetch)
    return (
        <div>
        <Image alt={dataFetch.name} width={200} height={200} src={dataFetch.image} />
        </div>
    )
}
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export async function getStaticProps({ params }) {
  let dataFetch = null;
  try {
    const response = await fetch('https://api.brchallenges.com/api/paqueta/shoes');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    dataFetch = data.find((item) => item.id === params.id) || null;
    if (!dataFetch) {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  return {
    props: {
      params,
      dataFetch,
    },
  };
}
