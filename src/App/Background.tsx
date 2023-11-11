import Player from "./management/InputScripts/TagPlayer";
import "./management/InputScripts/Input&Manager";

function Background() {
  return (
    <div
      id="DivPlayer"
      className="flex absolute bg-slate-600 overflow-hidden w-screen h-screen items-center justify-center "
    >
      <Player id="Player" type="youtube" href="jfKfPfyJRdk" />
    </div>
  );
}

export default Background;
