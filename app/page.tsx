"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { MantineProvider, Text, Button } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";

export default function Home() {
  return (
    <MantineProvider
      withCSSVariables
      withNormalizeCSS
      withGlobalStyles
      theme={{
        colors: {
          giantsjj: [
            "#A19D99",
            "#948573",
            "#797670",
            "#806F5F",
            "#776A57",
            "#745F48",
            "#42382C",
            "#322E2A",
            "#1B1816",
            "#000000",
          ],
        },
        primaryColor: "giantsjj",
      }}
    >
      <center>
        <Button>Test</Button>
      </center>
    </MantineProvider>
  );
}
