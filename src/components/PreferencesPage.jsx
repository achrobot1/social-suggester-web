import React from "react";
import "./Main.css";

import { Grid, makeStyles, Hidden } from "@material-ui/core";

import PreferencesForm from "./PreferencesForm";

const useStyles = makeStyles((theme) => ({
  gridImage: {
    maxWidth: "100%",
    margin: 0,
    display: "block",
    opacity: 0.25,
  },
}));

export default function PreferencesPage(props) {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Hidden xsDown>
          <Grid item xs={4}>
            <div
              style={{
                background: "black",
              }}
            >
              <img
                src="/images/happy-people.jpg"
                className={classes.gridImage}
                alt=""
              />
              <img
                src="/images/car-with-mountains.jpg"
                className={classes.gridImage}
                alt=""
              />

              <Hidden mdUp>
                <img
                  src="/images/water-park.jpg"
                  className={classes.gridImage}
                  alt=""
                />

                <img
                  src="/images/picnic.jpg"
                  className={classes.gridImage}
                  alt=""
                />
              </Hidden>
            </div>
          </Grid>
        </Hidden>

        <Grid item xs={12} sm={8}>
          <PreferencesForm
            exerciseLevel={props.exerciseLevel}
            environmentPreference={props.environmentPreference}
            isLocationSet={props.isLocationSet}
            location={props.location}
            onExerciseChange={props.onExerciseChange}
            onEnvironmentChange={props.onEnvironmentChange}
            setInputRef={props.setInputRef}
          />
        </Grid>
      </Grid>
    </>
  );
}
