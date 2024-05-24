import { FC, ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../shared/theme/theme";
import { CssBaseline } from "@mui/material";

type AppWrapperProps = {
  children: ReactNode;
};

const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default AppWrapper;