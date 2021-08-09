import React from "react";

import {
  makeStyles,
  useTheme,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Card,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Button,
} from "@material-ui/core";

import Color from "color";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    opacity: 0.7,
    width: "100%",
    background: Color(theme.palette.background.paper).alpha(0.3).string(),
  },
  valueTextSelected: {
    color: theme.palette.secondary.light,
  },
  valueTextUnselected: {
    color: theme.palette.grey["300"],
    opacity: "0.5",
  },
  cardAction: {
    padding: 0,
    marginTop: 0,
    justifyContent: "center",
  },
  button: {
    color: theme.palette.info.light,
  },
}));

function PreferencesCard(props) {
  const { location, exercise, environment } = props;
  const theme = useTheme();
  const classes = useStyles(theme);

  if (!location) {
    setTimeout(() => {
      window.location = "/preferences";
    }, 2000);
    return (
      <Dialog open={true}>
        <DialogTitle>Missing location</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Redirecting to Preferences page ...
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Card className={classes.card}>
      <CardContent style={{ textAlign: "center", padding: 5 }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} md={4}>
            <Grid container alignItems="center" direction="column">
              <Grid item>
                <Typography variant="caption">Location</Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="caption"
                  className={classes.valueTextSelected}
                >
                  {location.formatted_address}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* <br /> */}

          <Grid item xs={12} md={4}>
            <Grid container alignItems="center" direction="column">
              <Grid item>
                <Typography variant="caption">Exercise</Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="caption"
                  className={
                    exercise.minimal
                      ? classes.valueTextSelected
                      : classes.valueTextUnselected
                  }
                >
                  {"Minimal"}
                </Typography>

                <Typography variant="caption"> | </Typography>

                <Typography
                  variant="caption"
                  className={
                    exercise.light
                      ? classes.valueTextSelected
                      : classes.valueTextUnselected
                  }
                >
                  {"Light"}
                </Typography>

                <Typography variant="caption"> | </Typography>

                <Typography
                  variant="caption"
                  className={
                    exercise.strenuous
                      ? classes.valueTextSelected
                      : classes.valueTextUnselected
                  }
                >
                  {"Strenuous"}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* <br /> */}

          <Grid item xs={12} md={4}>
            <Grid container alignItems="center" direction="column">
              <Grid item>
                <Typography variant="caption">Environment</Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="caption"
                  className={
                    environment.indoor
                      ? classes.valueTextSelected
                      : classes.valueTextUnselected
                  }
                >
                  {"Indoor"}
                </Typography>

                <Typography variant="caption"> | </Typography>

                <Typography
                  variant="caption"
                  className={
                    environment.outdoor
                      ? classes.valueTextSelected
                      : classes.valueTextUnselected
                  }
                >
                  {"Outdoor "}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* <br /> */}
        </Grid>
      </CardContent>

      <CardActions className={classes.cardAction}>
        <Button
          variant="text"
          size="small"
          className={classes.button}
          component={Link}
          to="/preferences"
        >
          Edit Preferences
        </Button>
      </CardActions>
    </Card>
  );
}

export default PreferencesCard;
