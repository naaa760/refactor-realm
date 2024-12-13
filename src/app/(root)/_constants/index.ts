import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { editor as Monaco } from "monaco-editor";

// Improved type for language configuration
export interface LanguageConfig {
  monacoLanguage: string | undefined;
  logo: string | StaticImport;
  id: string;
  label: string;
  logoPath: string;
  pistonRuntime: {
    language: string;
    version: string;
  };
  monakoLanguage: string;
  defaultCode: string;
}

// Strongly typed language configuration
export const LANGUAGE_CONFIG: Record<string, LanguageConfig> = {
  javascript: {
    id: "javascript",
    label: "JavaScript",
    logo: "/javascript-logo.svg",
    logoPath: "/javascript-logo.svg",
    pistonRuntime: { language: "javascript", version: "latest" },
    monakoLanguage: "javascript",
    defaultCode:
      "// Write your JavaScript code here\n\nconsole.log('Hello, World!');",
    monacoLanguage: undefined,
  },
  python: {
    id: "python",
    label: "Python",
    logo: "/python-logo.svg",
    logoPath: "/python-logo.svg",
    pistonRuntime: { language: "python", version: "latest" },
    monakoLanguage: "python",
    defaultCode: "# Write your Python code here\n\nprint('Hello, World!')",
    monacoLanguage: undefined,
  },
  typescript: {
    id: "typescript",
    label: "TypeScript",
    logo: "/typescript-logo.svg",
    logoPath: "/typescript-logo.svg",
    pistonRuntime: { language: "typescript", version: "latest" },
    monakoLanguage: "typescript",
    defaultCode:
      "// Write your TypeScript code here\n\nconst greeting: string = 'Hello, World!';\nconsole.log(greeting);",
    monacoLanguage: undefined,
  },
};

// Theme interface with more specific typing
export interface Theme {
  id: string;
  label: string;
  color: string;
}

// Predefined themes
export const THEMES: Theme[] = [
  { id: "vs-dark", label: "VS Dark", color: "#1e1e1e" },
  { id: "vs-light", label: "VS Light", color: "#ffffff" },
  { id: "github-dark", label: "GitHub Dark", color: "#0d1117" },
  { id: "monokai", label: "Monokai", color: "#272822" },
  { id: "solarized-dark", label: "Solarized Dark", color: "#002b36" },
];

// Enhanced theme definition interface
export interface ThemeDefinition {
  base: "vs" | "vs-dark" | "hc-black";
  inherit: boolean;
  rules: Array<{
    token: string;
    foreground?: string;
    background?: string;
    fontStyle?: string;
  }>;
  colors: Record<string, string>;
}

// Comprehensive theme definitions with improved typing
export const THEME_DEFINITIONS: Record<string, ThemeDefinition> = {
  "github-dark": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "6e7681", fontStyle: "italic" },
      { token: "string", foreground: "a5d6ff" },
      { token: "keyword", foreground: "ff7b72", fontStyle: "bold" },
      { token: "number", foreground: "79c0ff" },
      { token: "type", foreground: "ffa657" },
      { token: "class", foreground: "ffa657" },
      { token: "function", foreground: "d2a8ff" },
      { token: "variable", foreground: "ffa657" },
      { token: "operator", foreground: "ff7b72" },
    ],
    colors: {
      "editor.background": "#0d1117",
      "editor.foreground": "#c9d1d9",
      "editor.lineHighlightBackground": "#161b22",
      "editorLineNumber.foreground": "#6e7681",
      "editorIndentGuide.background": "#21262d",
      "editor.selectionBackground": "#264f78",
      "editor.inactiveSelectionBackground": "#264f7855",
    },
  },
  monokai: {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "75715E", fontStyle: "italic" },
      { token: "string", foreground: "E6DB74" },
      { token: "keyword", foreground: "F92672", fontStyle: "bold" },
      { token: "number", foreground: "AE81FF" },
      { token: "type", foreground: "66D9EF" },
      { token: "class", foreground: "A6E22E" },
      { token: "function", foreground: "A6E22E" },
      { token: "variable", foreground: "F8F8F2" },
      { token: "operator", foreground: "F92672" },
    ],
    colors: {
      "editor.background": "#272822",
      "editor.foreground": "#F8F8F2",
      "editorLineNumber.foreground": "#75715E",
      "editor.selectionBackground": "#49483E",
      "editor.lineHighlightBackground": "#3E3D32",
      "editorCursor.foreground": "#F8F8F2",
      "editor.selectionHighlightBackground": "#49483E",
    },
  },
  "solarized-dark": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "586e75", fontStyle: "italic" },
      { token: "string", foreground: "2aa198" },
      { token: "keyword", foreground: "859900", fontStyle: "bold" },
      { token: "number", foreground: "d33682" },
      { token: "type", foreground: "b58900" },
      { token: "class", foreground: "b58900" },
      { token: "function", foreground: "268bd2" },
      { token: "variable", foreground: "b58900" },
      { token: "operator", foreground: "859900" },
    ],
    colors: {
      "editor.background": "#002b36",
      "editor.foreground": "#839496",
      "editorLineNumber.foreground": "#586e75",
      "editor.selectionBackground": "#073642",
      "editor.lineHighlightBackground": "#073642",
      "editorCursor.foreground": "#839496",
      "editor.selectionHighlightBackground": "#073642",
    },
  },
};

// Type-safe theme definition function
export const defineMonacoThemes = (monaco: typeof Monaco) => {
  Object.entries(THEME_DEFINITIONS).forEach(([themeName, themeData]) => {
    try {
      monaco.defineTheme(themeName, {
        base: themeData.base,
        inherit: themeData.inherit,
        rules: themeData.rules.map((rule) => ({
          token: rule.token,
          foreground: rule.foreground,
          background: rule.background,
          fontStyle: rule.fontStyle,
        })),
        colors: themeData.colors,
      });
    } catch (error) {
      console.error(`Error defining theme ${themeName}:`, error);
    }
  });
};
