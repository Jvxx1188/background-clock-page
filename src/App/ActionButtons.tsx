import { Button } from "@/components/ui/button";

import "./management/HideElementsKeys/HideElementsKeys";
export default function ActionButtons() {
  return (
    <div className="absolute z-10">
      <div className=" flex flex-col gap-3 w-30 p-3">
        <Button className="rounded-full" id="FullScreenButton">
          Fullscreen
        </Button>
        <Button className="rounded-full" id="HideInputButton">
          HideInput
        </Button>
        <Button className="rounded-full" id="ShadowButton">
          Shadow
        </Button>
      </div>
    </div>
  );
}
