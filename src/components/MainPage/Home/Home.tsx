import React from 'react';
import { Grid, Typography } from '@mui/material';

import useStyles from './styles';

function Home(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid className={classes.mainGrid}>
      <Grid item xs={12}>
        <Typography variant="h3">Welcome!</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4">Make a nice website here!</Typography>
      </Grid>
    </Grid>
  );
}

export default Home;
