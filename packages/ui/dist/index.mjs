// src/button/button.tsx
import { jsx } from "react/jsx-runtime";
var Button = () => {
  return /* @__PURE__ */ jsx("div", { children: "Button" });
};
Button.displayName = "Button";

// src/item.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Item = () => {
  return /* @__PURE__ */ jsx2("div", { children: "item" });
};
Item.displayName = "Item";
export {
  Button,
  Item
};
