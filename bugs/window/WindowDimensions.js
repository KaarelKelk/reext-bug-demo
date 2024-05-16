"use client";
import ReExt from "@gusmano/reext";
import { createPortal } from "react-dom";
import { BUG_UNRESOLVED } from "../constants";

export const BUG_META = {
  path: "WindowDimensions.js",
  xtype: "window",
  version: "7.7.0",
  title: "Window Dimensions",
  description: `Window dimensions are not computed correctly and width/height config do not work.`,
  resolved: BUG_UNRESOLVED,
};

// - ExtJS Equivalent (working):
// Ext.create({
//   xtype: "window",
//   autoShow: true,
//   constrain: true,
//   // width: 300,
//   // height: 300,
//   title: "Example",
//   modal: true,
//   items: [
//       { xtype: "container", items: [
//           { xtype: "button", text: "Example Button", width: 300 }
//       ] }
//   ]
// });

function ExtWindowComponent() {
  return (
    <ReExt
      xtype="window"
      config={{
        autoShow: true,
        title: "Window Dimensions Bug",
        // width: 300, // Do not work as well,
        // height: 300, // Do not work as well,
        modal: true,
        items: [
          {
            xtype: "container",
            items: [{ xtype: "button", text: "Example Button", width: 300 }],
          },
        ],
      }}
    />
  );
}

export default function WindowDimensions() {
  return createPortal(<ExtWindowComponent />, document.body);
}
