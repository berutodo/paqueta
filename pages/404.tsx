import Link from "next/link";

export default function Custom404() {
    return (
        <main className="h-screen flex flex-col justify-center items-center">
            <h1>Opps!</h1>
            <h2>Talvez esse produto não exista.</h2>
            <Link className="flex justify-center items-center w-56 h-8 rounded-md bg-orange-400 text-white font-semibold" href={"/"}>Voltar a pagina inicial</Link>
        </main>
    )
  }