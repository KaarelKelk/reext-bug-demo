"use client";

import ReExt from "@gusmano/reext";
import { BUG_UNRESOLVED } from "../constants";

export const BUG_META = {
  path: "ReactContent.js",
  version: "7.7.0",
  xtype: "container",
  title: "React content inside container",
  description:
    // &#x3C;p&#x3E;&#x3C;/p&#x3E; => <p></p>
    "Seems to log error to console when using e.g &#x3C;p&#x3E;&#x3C;/p&#x3E; or any other jsx/html component tags inside a container",
  resolved: BUG_UNRESOLVED,
};

export default function ContainerReactContent() {
  return (
    <ReExt xtype="container" config={{}}>
      <p>Example paragraph content. (See console for error)</p>

      <pre>
        React does not recognize the `ReExtParent` prop on a DOM element. If you
        intentionally want it to appear in the DOM as a custom attribute, spell
        it as lowercase `reextparent` instead. If you accidentally passed it
        from a parent component, remove it from the DOM element.
      </pre>
    </ReExt>
  );
}
