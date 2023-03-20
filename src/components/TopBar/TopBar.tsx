import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import ImageSearchBar from "../SearchBar/ImageSearchBar";
import Toolbar from "@mui/material/Toolbar";
import TopBarMenu from "./TopBarMenu";
import Typography from "@mui/material/Typography";

const TopBar = () => {
  return (
    <Box sx={{ flexGrow: 1, position: "sticky", top: 0, zIndex: 2 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Interest
          </Typography>
          <ImageSearchBar />
          <TopBarMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
