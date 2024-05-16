"use client";
import { ReExtProvider } from "@gusmano/reext";
import "./globals.css";

const DEFAULT_THEME = "crisp";
const THEME =
  (typeof localStorage !== "undefined" && localStorage.getItem("theme")) ||
  DEFAULT_THEME;

const REEXT_CONFIG = {
  sdkversion: "7.7.0",
  toolkit: "classic",
  theme: THEME,
  packages: {
    charts: false,
    fontawesome: true,
    ux: false,
    calendar: false,
    d3: false,
    exporter: false,
    pivot: false,
    pivotd3: false,
    pivotlocale: false,
    froalaeditor: true,
  },
  debug: false,
  urlbase: "/",
  license: "LIC_0407",
  //  You need to copy it
  url: "local",
};

export default function RootLayout({ children }) {
  return (
    <html className="x-viewport" lang="en">
      <body style={{ display: "flex" }}>
        <ReExtProvider ReExtData={REEXT_CONFIG}>{children}</ReExtProvider>
      </body>
    </html>
  );
}
