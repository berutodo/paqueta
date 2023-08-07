import { GetStaticPaths } from "next";
import Image from "next/image";
import { Product } from "../../../components/types/Highlight.types";

export default function Page({ params, dataFetch}: { params: { id: string}, dataFetch: Product }) {
  const numeracao = [35,36,37,38,39,40,42]
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
              <h1 className="text-4xl font-semibold">{dataFetch.name}</h1>
              <span className="text-lg">Código do produto: {dataFetch.id}</span>
              <div className="flex flex-row items-center gap-4">
                <h1 className={`text-2xl font-normal ${dataFetch.price.discount > 0 ? `line-through` : ""}`}>R${dataFetch.price.value}</h1>
                <span className="text-sm bg-green-500 text-white text-center rounded-sm">{dataFetch.price.discount * 100}% de desconto</span>
              </div>
              <span className="font-bold text-4xl">R${Math.round(discountPrice(dataFetch.price.value, dataFetch.price.discount))}</span>
              <span>Escolha a numeração:</span>
              <div className="flex flex-row justify-between">{numeracao.map(e => (
                <div className="w-11 h-11 border-2 flex items-center justify-center cursor-pointer">{e}</div>
                ))}
              </div>
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
