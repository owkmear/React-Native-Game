declare module "react-native-syntax-highlighter" {
  import React from "react";

  interface SyntaxHighlighterProps {
    language: string;
    style: React.CSSProperties;
    highlighter: string;
    customStyle: React.CSSProperties;
    fontSize: number;
    children: React.ReactNode;
  }

  export default function SyntaxHighlighter(
    props: SyntaxHighlighterProps
  ): JSX.Element;
}

declare module "react-syntax-highlighter/dist/esm/styles/prism" {
  import React from "react";

  export const dark: React.CSSProperties;
  export const prism: React.CSSProperties;
}
