import { Bg } from "./BGTemplates/background";
import { YTVD } from "./BGTemplates/YTVideo";
import Props from "@/lib/PropsInterface";
export default function PlayerTag(prop: Props) {
  console.log(prop.href + ":" + prop.type);
  //AQUI É A TAG EM SI, ENTAO A GENTE DELETA E CRIA ELA COM AS COISAS NOVAS TLGD
  const PlayerType = prop.type;

  if (PlayerType == "youtube") {
    //VIDEO
    return <YTVD href={prop.href} />;
  }
  //BACKGROUND

  return <Bg href={prop.href} />;
}
