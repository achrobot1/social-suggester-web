import React from "react";
import "./Main.css";

import {
  TextField,
  Grid,
  makeStyles,
  Divider,
  Typography,
  Tooltip,
  Hidden,
  Button,
} from "@material-ui/core";

import { Link } from "react-router-dom";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import NaturePeopleIcon from "@material-ui/icons/NaturePeople";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";

import EnvironmentEntry from "./EnvironmentEntry";
import ExerciseEntry from "./ExerciseEntry";
import OutlinedDiv from "./OutlinedDiv";

const useStyles = makeStyles((theme) => ({
  locationInput: {
    zIndex: 15,
    opacity: 1,
  },
}));

export default function PreferencesForm(props) {
  const classes = useStyles();

  const { environmentPreference, exerciseLevel, isLocationSet } = props;

  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{
          paddingTop: "4vh",
          paddingLeft: "8vw",
          paddingRight: "8vw",
        }}
      >
        <Grid item xs={12}>
          <Typography gutterBottom variant="h4">
            Preferences
          </Typography>

          <Divider />
          <Grid
            container
            direction="column"
            alignContent="stretch"
            justify="center"
            spacing={4}
            style={{
              marginTop: 10,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <Grid item>
              <Tooltip
                title={"Enter your location by typing in your zip code or city"}
              >
                <Grid container justify="space-between" alignItems="center">
                  <Hidden xsDown>
                    <Grid item xs={0} sm={1}>
                      <LocationOnIcon
                        style={{
                          color: isLocationSet ? "white" : "#f0b63b",
                        }}
                        fontSize="large"
                      />
                    </Grid>
                  </Hidden>

                  <Grid item xs={12} sm={10}>
                    <OutlinedDiv
                      className={classes.locationInput}
                      label="Your location"
                      needsAttention={!isLocationSet}
                      required
                    >
                      <TextField
                        id="location-input"
                        inputProps={{
                          id: "pac-input",
                          type: "text",
                          placeholder: "Search location",
                          defaultValue: props.location
                            ? props.location.formatted_address
                            : "",
                        }}
                        fullWidth
                        inputRef={props.setInputRef}
                      />
                    </OutlinedDiv>
                  </Grid>
                </Grid>
              </Tooltip>
            </Grid>

            <Grid item>
              <Tooltip
                title={
                  "Specify whether you have a preference towards an indoor or outdoor activity"
                }
              >
                <Grid container justify="space-between" alignItems="center">
                  <Hidden xsDown>
                    <Grid item xs={0} sm={1}>
                      <NaturePeopleIcon
                        style={{
                          color: isLocationSet ? "white" : "gray",
                        }}
                        fontSize="large"
                      />
                    </Grid>
                  </Hidden>

                  <Grid item xs={12} sm={5}>
                    <EnvironmentEntry
                      locationSet={isLocationSet}
                      environmentPreference={environmentPreference}
                      onEnvironmentChange={props.onEnvironmentChange}
                    />
                  </Grid>

                  <Hidden xsDown>
                    <Grid item sm={4}>
                      <div></div>
                    </Grid>
                  </Hidden>
                </Grid>
              </Tooltip>
            </Grid>

            <Grid item>
              <Tooltip title={"Specify preferred activity levels"}>
                <Grid container justify="space-between" alignItems="center">
                  <Hidden xsDown>
                    <Grid item xs={0} sm={1}>
                      <DirectionsRunIcon
                        style={{
                          color: isLocationSet ? "white" : "gray",
                        }}
                        fontSize="large"
                      />
                    </Grid>
                  </Hidden>

                  <Grid item xs={12} sm={5}>
                    <ExerciseEntry
                      locationSet={isLocationSet}
                      exerciseLevel={exerciseLevel}
                      onExerciseChange={props.onExerciseChange}
                    />
                  </Grid>

                  <Hidden xsDown>
                    <Grid item sm={4}>
                      <div></div>
                    </Grid>
                  </Hidden>
                </Grid>
              </Tooltip>
            </Grid>
          </Grid>

          <Button
            variant="outlined"
            disabled={!isLocationSet}
            color="secondary"
            size="large"
            component={Link}
            to={"/suggestions"}
            style={{
              marginTop: "3vh",
              marginBottom: 10,
            }}
          >
            Show Results
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
