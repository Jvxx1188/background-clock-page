import Player from "./TagPlayer";
import { createRoot } from "react-dom/client";
import { useState } from "react";
//GERENCIADOR DO INPUT
import { Type } from "./../../Interface";

setTimeout(() => {
  const divplayer = document.getElementById("DivPlayer") as HTMLDivElement;
  let rootelement = createRoot(divplayer);
  let select = document.querySelector;

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
    rootelement.render(<Player type={Type} href={URL} />);
  }

  Input();
}, 1000);
