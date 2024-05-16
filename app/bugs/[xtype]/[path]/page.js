"use client";

import Redirect from "@/common/Redirect";
import { BUG_LIST } from "../../../../bugs/list";
import { useParams } from "next/navigation";
import { useMemo } from "react";

export default function BugPage() {
  const params = useParams();

  // Ensure xtype and path are valid
  const BugReport = BUG_LIST.find(({ BUG_META }) => {
    return (
      BUG_META.xtype === params.xtype &&
      BUG_META.path === decodeURIComponent(params.path)
    );
  });

  const toastFooter = useMemo(() => {
    return `<p><b>xtype: </b>${params.xtype}<br /><b>file: </b>/bugs/${params.xtype}/${params.path}</p>`;
  }, [params]);

  if (!BugReport) {
    Ext.toast({
      title: "Error",
      html: `Bug not found ${toastFooter}`,
      align: "tr",
    });
    return <Redirect to="/" />;
  }

  const { BUG_META, BugDemoComponent } = BugReport;

  const openQuestions = BUG_META.faq
    .filter((f) => !f.answer)
    .map(({ question }) => {
      return `<li>${question}</li>`;
    })
    .join("");

  Ext.toast({
    html: `<p><b>Description</b>: ${BUG_META.description}</p>${
      openQuestions ? `<b>Open Questions:</b><ul>${openQuestions}</ul>` : ""
    } ${toastFooter}`,
    title: `Bug: ${BUG_META.title}`,
    align: "tr",
    closable: true,
    liveDrag: true,
  });

  return <BugDemoComponent />;
}
