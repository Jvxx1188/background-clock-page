import Props from "@/lib/PropsInterface";

export function Bg(prop : Props) {
  //ViewportW * imgsize 
  return <img src={prop.href} alt="Erro : Imagem não encontrada ou endereço incorreto" className="object-cover w-full h-full" />;
}
