setTimeout(() => {
  //VALUES
  let Inputdiv = document.querySelector(".InterfaceInputs") as HTMLDivElement;
  let InterfaceContent = document.querySelector("#Content") as HTMLDivElement;

  /////////////////////////////////////////

  let Buttons = {
    FullScreen: document.querySelector(
      "#FullScreenButton"
    ) as HTMLButtonElement,
    HideInput: document.querySelector("#HideInputButton") as HTMLButtonElement,
    Shadow: document.querySelector("#ShadowButton") as HTMLButtonElement,
  };

  /////////////////////////////////////////////////////////////

  Buttons.HideInput.addEventListener("click", () => {
    Inputdiv.classList.toggle("esconder");
  });
  Buttons.FullScreen.addEventListener("click", () => {
    document.body.requestFullscreen();
  });
  Buttons.Shadow.addEventListener("click", () => {
    InterfaceContent?.classList.toggle("shadow");
  });

  let mouseTimeout: NodeJS.Timeout;
  let Mov = false;

  document.addEventListener("mousemove", () => {
    TimeoutMouse();
  });
  document.addEventListener("mouseup", () => {
    TimeoutMouse();
  });

  function TimeoutMouse() {
    clearTimeout(mouseTimeout);
    Mov = true;
    Moving();
    mouseTimeout = setTimeout(() => {
      Mov = false;
      console.log("esta");

      Moving();
    }, 1000);
    function Moving() {
      if (Mov) {
        console.log("true");
        Buttons.FullScreen.style.display = "flex";
        Buttons.HideInput.style.display = "flex";
        Buttons.Shadow.style.display = "flex";
      }
      if (!Mov) {
        console.log("false");
        Buttons.FullScreen.style.display = "none";
        Buttons.HideInput.style.display = "none";
        Buttons.Shadow.style.display = "none";
      }
    }
  }
}, 1000);
