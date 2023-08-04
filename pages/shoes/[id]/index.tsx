import { GetStaticPaths } from "next";

export default function Page({ params, }: { params: { id: string }; }) {
    console.log(params.id)
    return (
        <>
        {params.id}
            <p>Page shoes</p>
        </>
    )
}
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}
export async function getStaticProps({params}){
  return {
    props: {
      params
    }
  }
}