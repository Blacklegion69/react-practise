import { useState } from "react";
export default function Darkmode() {
  const [ourstyle, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const handleClick = () => {
    if (ourstyle.color === "white") {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
    } else {
      setStyle({
        color: "white",
        backgroundColor: "black",
      });
    }
  };
  return (
    <>
      <div
        style={ourstyle}
        className="relative h-screen m-3 flex-col justify-center flex-wrap items-center p-2 bg-slate-500"
      >
        <div
          onClick={handleClick}
          className="p-2 bg-slate-300 sticky top-0 text-slate-900 text-center rounded"
        >
          Click Me
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare
          neque et magna vehicula, at tincidunt dolor blandit. Etiam ornare mi
          ac tempor ornare. Pellentesque fringilla urna quis dui eleifend, eget
          molestie justo varius. Praesent scelerisque ligula ac est suscipit,
          nec efficitur massa tincidunt. Aliquam vitae odio eleifend,
          sollicitudin libero congue, interdum metus. Quisque eu erat in augue
          ullamcorper tempus. Nunc suscipit dolor vulputate porta pharetra.
          Suspendisse blandit quam quis risus molestie, id maximus dolor
          suscipit. Quisque varius mauris ac consequat viverra. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Aenean ornare neque et
          magna vehicula, at tincidunt dolor blandit. Etiam ornare mi ac tempor
          ornare. Pellentesque fringilla urna quis dui eleifend, eget molestie
          justo varius. Praesent scelerisque ligula ac est suscipit, nec
          efficitur massa tincidunt. Aliquam vitae odio eleifend, sollicitudin
          libero congue, interdum metus. Quisque eu erat in augue ullamcorper
          tempus. Nunc suscipit dolor vulputate porta pharetra. Suspendisse
          blandit quam quis risus molestie, id maximus dolor suscipit. Quisque
          varius mauris ac consequat viverra.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aenean ornare neque et magna vehicula, at
          tincidunt dolor blandit. Etiam ornare mi ac tempor ornare.
          Pellentesque fringilla urna quis dui eleifend, eget molestie justo
          varius. Praesent scelerisque ligula ac est suscipit, nec efficitur
        </p>
      </div>
    </>
  );
}
