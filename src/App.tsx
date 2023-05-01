import { RouterProvider } from "react-router";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "usehooks-ts";
import { routes } from "./router";
import defaultTheme from "./styles/defaultTheme";
import darkTheme from "./styles/darkTheme";
import { Reset } from "styled-reset";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  const { isDarkMode } = useDarkMode();
  console.log({ isDarkMode }, 111);
  const theme = isDarkMode ? darkTheme : defaultTheme;
  return (
    <>
      <Reset />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </>
  );
}
