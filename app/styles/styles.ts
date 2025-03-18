export const centeredDivStyle =
  "flex flex-row min-h-screen justify-center items-center";

export const flexRow = "flex flex-row";
export const flexRowReverse = "flex flex-row-reverse";

// layout.tsx
export const layoutStyles = {
  centeredDiv: centeredDivStyle,
  centeredDivTitleStyle:
    "flex flex-row min-h-screen justify-center items-center m-24",
  layoutStyle: "grid h-screen grid-rows-[auto,1fr]",
} as const;

// /app/page.tsx
export const mainPageStyles = {
  mainPageTitle: "flex flex-row min-h-screen justify-center items-center",
  pageStyle:
    "grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20",
  mainStyle: "row-start-2 flex flex-col items-center gap-3 sm:items-start",
  linkStyle:
    "inline-flex items-center rounded-md text-xl text-blue-400 hover:text-slate-600 focus:outline-none focus:ring-0 focus:ring-blue-400 focus:ring-offset-2 active:text-slate-600 tracking-tight p-1",
} as const;

// top-bar.tsx
export const topBarStyles = {};

// footer.tsx
export const footerStyles = {
  centeredDiv: centeredDivStyle,
  centeredFooter:
    "flex flex-row items-center justify-center justify-items-end p-3",
  skywalkerSam:
    "text-slate-600 hover:text-blue-400 hover:underline focus:text-blue-400",
} as const;

// starboy-logo.tsx
export const starboyLogoStyles = {
  starboyLogo: "flex flex-row items-center justify-center p-3",
} as const;

// sign-in.tsx
export const signInStyles = {
  signInButton:
    "flex justify-end p-3 text-lg font-semibold text-blue-400 tracking-tighter",
  signInButtonHover:
    "rounded-md hover:text-slate-600 hover:underline focus:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-1 active:text-slate-600",
} as const;
