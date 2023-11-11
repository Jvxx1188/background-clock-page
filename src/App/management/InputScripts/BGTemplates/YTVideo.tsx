import Props from "@/lib/PropsInterface";
export function YTVD(props: Props) {
  let extra = window.innerWidth / window.innerHeight;
  //vertical

  const UrlId = GetId(props.href as string);

  if (extra < 1.77) {
    return (
      <div className="aspect-video h-full">
        <iframe
          className="w-full h-full"
          src={
            "https://www.youtube.com/embed/" + UrlId + "?autoplay=1&controls=0"
          }
          title="YouTube video player"
          allow="autoplay; encrypted-media; c"
        ></iframe>
      </div>
    );
  }
  //horizontal
  return (
    <div className="aspect-video w-full">
      <iframe
        className="w-full h-full"
        src={
          "https://www.youtube.com/embed/" + UrlId + "?autoplay=1&controls=0"
        }
        title="YouTube video player"
        allow="autoplay; encrypted-media;"
      ></iframe>
    </div>
  );
}

function GetId(href: string) {
  const BeforeEqualString = href.indexOf("=");
  const hrefId = href.slice(BeforeEqualString + 1, BeforeEqualString + 12);
  console.log(hrefId);
  return hrefId;
}
