import { Hobbies } from "@/components/Hobbies";
import { MeuNome } from "@/components/MeuNome";

const Page = () => {
  return (
    <div> 
      <MeuNome name="Rayller" age={32} birthDate={new Date(1994, 4, 11)}/> 
      <Hobbies />
    </div>
  );      
}

export default Page;
