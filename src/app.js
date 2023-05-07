import React from "react";
import { createRoot } from "react-dom/client";

// const heading1 = React.createElement("h1", {
//   children: "Biodata Perusahaan",
//   className: "heading-1",
// });
// const heading2 = React.createElement("h2", {
//   children: "PT Enigma Cipta Humanika",
// });

const element = React.createElement(
  "ul",
  null,
  React.createElement("li", null, "Mangga"),
  React.createElement("li", null, "Jeruk"),
  React.createElement("li", null, "Pisang")
);

const root = createRoot(document.getElementById("root"));

root.render(element);
