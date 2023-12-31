import { GetStaticPaths } from "next";
import { Product } from "../../../components/types/Highlight.types";
import ProductComponent from "../../../components/Product/Product";
import { HeaderComponent } from "../../../components/Head";
import { Footer } from "../../../components/Footer";

export default function Page({ params, dataFetch}: { params: { id: string}, dataFetch: Product }) {
    return (
      <>
      <HeaderComponent/>
      <ProductComponent dataFetch={dataFetch}/> 
      <Footer/>
      </>
      
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
      paths: [],
      fallback: 'blocking',
  }
}
