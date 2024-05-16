"use client";

import ReExt from "@gusmano/reext";
import { useState } from "react";
import { BUG_WORKAROUND } from "../constants";

export const BUG_META = {
  path: "DynamicTabRender.js",
  xtype: "tabpanel",
  title: "Static + Dynamic TabPanel",
  description:
    "Dynamic tabs are not rendered correctly when there's also a static Tab. Also, first tab is not active.",
  faq: [
    {
      question: "How to manage witch tab is active by default?",
      answer: null,
    },
  ],
  resolved: BUG_WORKAROUND,
};

function ExampleTab({ title }) {
  return (
    <ReExt
      xtype="panel"
      config={{
        title: title,
        html: `Tab content for ${title}`,
        bodyPadding: 10,
      }}
    />
  );
}

export default function DynamicTabRender() {
  const [_exampleTabState, setExampleTabState] = useState(null);

  const tabs = ["Dynamic Tab 1", "Dynamic Tab 2", "Dynamic Tab 3"];

  return (
    <ReExt
      xtype="tabpanel"
      config={{
        tabPosition: "left",
        defaults: { padding: 0 },
        tabRotation: 0,
        autoDestroy: false,
      }}
      onTabchange={(tabPanel, newCard, oldCard) => {
        setExampleTabState(newCard);
      }}
    >
      {/*
        Commenting out static tab would fix the dynamic tabs.

        Possible workaround: Just generate all the tabs dynamically, but leaving it here as an open bug as it should work.
      */}
      <ExampleTab title={"Static Tab"} />
      {tabs.map((tab, index) => (
        <ExampleTab key={index} title={tab} />
      ))}
    </ReExt>
  );
}
