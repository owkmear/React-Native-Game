declare module "react-native-syntax-highlighter" {
  import React from "react";

  interface SyntaxHighlighterProps {
    language: string;
    style: string;
    highlighter: string;
    customStyle: React.CSSProperties;
    fontSize: number;
    children: React.ReactNode;
  }

  export default function SyntaxHighlighter(
    props: SyntaxHighlighterProps
  ): JSX.Element;
}
