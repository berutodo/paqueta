import { GetStaticPaths } from "next";
import Image from "next/image";
import { Product } from "../../../components/types/Highlight.types";

export default function Page({ params, dataFetch}: { params: { id: string}, dataFetch: Product }) {
  const numeracao = [35,36,37,38,39,40]
  console.log(dataFetch)
    function discountPrice(price: number, discount: number){
      if(discount == 0){
        return price;
      }
      return price - (price * discount)
    }
    return (
      <div className="sm:w-2/3 mx-auto border-2">
        <div className="mx-auto flex flex-col sm:flex-row gap-8 items-center p-4">
          <Image alt={dataFetch.name} width={836} height={836} src={dataFetch.image} />
          <div className="flex flex-col gap-2">
              <h1>{dataFetch.name}</h1>
              <span>Código do produto: {dataFetch.id}</span>
              <h1>{dataFetch.price.value}</h1>
              <span>{dataFetch.price.discount > 0 && discountPrice(dataFetch.price.value, dataFetch.price.discount)}</span>
              <span>Escolha a numeração:</span>
              <div className="flex flex-row gap-4">{numeracao.map(e => (
              <div className="w-11 h-11 border-2 flex items-center justify-center cursor-pointer">{e}</div>
              ))}</div>
              <a className="uppercase text-white text-2xl text-center rounded-md p-3 w-full bg-gradient-to-br from-orange-500 to-orange-300" href="#">comprar</a>
          </div>
        </div>
        <div className="w-11/12 flex flex-col mx-auto gap-3">
          <h1 className="uppercase text-4xl font-semibold">descrição do produto</h1>
          <p className="text-xl font-light">{dataFetch.description}</p>  
        </div>
        
      </div>
      
    )
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

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}
