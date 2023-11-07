import Player from "./management/InputScripts/TagPlayer";
import "./management/InputScripts/Input&Manager";

function Background() {
  return (
    <div
      id="DivPlayer"
      className="flex absolute bg-slate-600 overflow-hidden w-full h-full items-center justify-center "
    >
      <Player id="Player" type="video" href="jfKfPfyJRdk" />
    </div>
  );
}

export default Background;
