import { IconButton, Menu, MenuItem } from "@mui/material";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const TopBarMenu = () => {
  const { handleLogOut } = useContext(UserContext);

  const handleClickLogout = (close: () => void) => {
    handleLogOut();
    close();
  };

  return (
    <PopupState variant="popover">
      {(popupState) => (
        <>
          <IconButton color="inherit" {...bindTrigger(popupState)}>
            <MoreVertIcon />
          </IconButton>

          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={() => handleClickLogout(popupState.close)}>Logout</MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
};

export default TopBarMenu;
