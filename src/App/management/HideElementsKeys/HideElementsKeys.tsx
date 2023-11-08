setTimeout(() => {
  document.addEventListener("keyup", (key) => {
    //VALUES
    let Inputdiv = document.querySelector(".InterfaceInputs") as HTMLDivElement;

    let InterfaceContent = document.querySelector("#Content") as HTMLDivElement;
    ////////////////////////////////////////////////

    if (key.key == "z") {
      console.log(Inputdiv);
      Inputdiv.classList.toggle("esconder");
    }

    if (key.key == "x") {
      console.log("X");
    }

    if (key.key == "c") {
      console.log("C");
    }
    if (key.key == "s") {
      InterfaceContent?.classList.toggle("shadow");
    }
  });
  ////
}, 1000);
