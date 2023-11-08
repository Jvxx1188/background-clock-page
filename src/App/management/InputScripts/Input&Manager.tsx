import Player from "./TagPlayer";
import { createRoot } from "react-dom/client";
//GERENCIADOR DO INPUT
setTimeout(() => {
  const divplayer = document.getElementById("DivPlayer") as HTMLDivElement;
  let rootelement = createRoot(divplayer);

  function Input() {
    const Input = document.querySelector("#InputUrl") as HTMLInputElement;

    Input.addEventListener("focus", () => {
      console.log();
      document.addEventListener("keyup", (key) => {
        if (key.key == "Enter") {
          RootRender(Input.value);
        }
      });
    });
  }

  //CRIAR INPUT
  function RootRender(URL: string) {
    //ROOT RENDER RESET AND RECREATE
    rootelement.unmount();
    rootelement = createRoot(divplayer);

    //ADD PLAYER IN ROOT ELEMENT
    rootelement.render(<Player type="video" href={URL} />);
  }

  Input();
}, 1000);
