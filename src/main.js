import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/hamburger";
import "./scripts/anchorlinks";
import "./scripts/sliderOnJquery";
import "./scripts/formOnVueJs";
import "./scripts/travelOnVanillaJs";