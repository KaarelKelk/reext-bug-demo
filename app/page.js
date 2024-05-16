"use client";

import { BUG_RESOLVED, BUG_UNRESOLVED, BUG_WORKAROUND } from "@/bugs/constants";
import { BUG_LIST } from "@/bugs/list";
import ReExt from "@gusmano/reext";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

export default function Home() {
  const router = useRouter();

  const bugMetaList = useMemo(
    () => BUG_LIST.map(({ BUG_META }) => BUG_META),
    []
  );

  const getBugPathFromRecord = (record) => {
    return `/bugs/${record.get("xtype")}/${record.get("path")}`;
  };

  return (
    <ReExt
      xtype="grid"
      config={{
        title: "ReExt Issue List",
        store: {
          data: bugMetaList,
          sorters: [{ property: "resolved", direction: "ASC" }],
          fields: ["xtype", "path", "title", "description", "resolved"],
        },
        tooltip: true,
        columns: [
          { text: "Title", dataIndex: "title", flex: 1 },
          {
            text: "Description",
            dataIndex: "description",
            flex: 1,
          },
          { text: "xtype", dataIndex: "xtype", flex: 1 },
          {
            text: "Path",
            flex: 1,
            renderer: (_value, _metaData, record) => {
              return getBugPathFromRecord(record);
            },
          },
          {
            text: "Resolved",
            dataIndex: "resolved",
            flex: 1,
            renderer: (value) => {
              switch (value) {
                case BUG_RESOLVED:
                  return "✅ Resolved";
                case BUG_UNRESOLVED:
                  return "❌ Unresolved";
                case BUG_WORKAROUND:
                  return "⚠️ Workaround";
                default:
                  return "Unknown";
              }
            },
          },
        ],
        listeners: {
          itemdblclick: (_grid, record) => {
            router.push(getBugPathFromRecord(record));
          },
        },
      }}
    />
  );
}
