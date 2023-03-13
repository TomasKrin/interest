import { Box, Button, IconButton, Typography } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import TableExample from "./TableExample";

const Examples = () => {
  //disabled={true/false} jeigu reikia state
  return (
    <div>
      <Button>Text</Button>
      <Button variant="text" disabled={true}>
        Text
      </Button>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disableElevation onClick={() => alert("say hello")}>
        Outlined
      </Button>
      <Button variant="outlined">Outlined</Button>
      <hr />
      <Button variant="contained" color="info">
        Info
      </Button>
      <Button variant="text" disabled={true} color="secondary">
        Secondary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" color="warning">
        Warning
      </Button>
      <Button
        variant="contained"
        disableElevation
        onClick={() => alert("say hello")}
        color="success"
      >
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
      <hr />
      <DeleteIcon />
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <hr />
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <hr />
      <Typography>Tomas</Typography>
      <Typography variant="body1">Tomas</Typography>
      <Typography variant="body2">Tomas</Typography>
      <Typography variant="subtitle2">Tomas</Typography>
      <Typography color="textSecondary">Tomas Sekantis</Typography>
      <Typography color="secondary">Tomas Sekantis</Typography>
      <Typography color="primary">Tomas Sekantis</Typography>
      <br />
      {/* kiekvienas vienetas didna po 8px */}
      <Box padding={3}>Tomas</Box>
      <Box
        p={1}
        sx={(theme) => ({
          border: `1px solid ${theme.palette.primary.main}`,
        })}
      >
        Tomas
      </Box>
      <hr />
      <TableExample />
    </div>
  );
};

export default Examples;
