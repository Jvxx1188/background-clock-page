import Props from "@/lib/PropsInterface";
export function YTVD(props: Props) {
  let extra = window.innerWidth / window.innerHeight;
  //vertical
  console.log(extra);
  if (extra < 1.77) {
    return (
      <div className="aspect-video h-full">
        <iframe
          className="w-full h-full"
          src={"https://www.youtube.com/embed/" + props.href + "?autoplay=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    );
  }
  //horizontal
  return (
    <div className="aspect-video w-full">
      <iframe
        className="w-full h-full"
        src={"https://www.youtube.com/embed/" + props.href + "?autoplay=1"}
        title="YouTube video player"
        allow="autoplay; accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
