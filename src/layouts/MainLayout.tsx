import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import TopBar from "../components/TopBar/TopBar";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box>
      <TopBar />
      <Box p={4}>{children}</Box>
    </Box>
  );
};

export default MainLayout;
