import { Grid, Typography } from "@mui/material";

import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <Grid container justifyContent="center" alignItems="center" height="100vh">
      <Grid item xs={12} md={7}>
        <Typography variant="h2" textAlign="center">
          Sign up to get your ideas
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        {children}
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default AuthLayout;
