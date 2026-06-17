import { Hobbies } from "@/components/Hobbies";
import { Imagem } from "@/components/Imagem";
import { MeuNome } from "@/components/MeuNome";
import Link from "next/link";

type PageProps = {
    params: Promise<{
        name: string;
    }>;
}

const Page = async ({ params }: PageProps) => {
  const { name } = await params;
  return (
    <div className="flex flex-col gap-4"> 
      <MeuNome name={name} age={32} birthDate={new Date(1994, 4, 11)}/> 
      <Hobbies />
      <div>
        <p>Estou estudando:</p>
        <Imagem />
      </div>
      <Link className="underline" href="/nivel-0">Voltar</Link>
    </div>
  );      
}

export default Page;
