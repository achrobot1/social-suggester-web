import React from "react";
import "./Main.css";

import { Link } from "react-router-dom";

import { Grid, Divider, Hidden, Typography, Button } from "@material-ui/core";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import ActivityCard from "./ActivityCard";
import PreferencesCard from "./PreferencesCard";

export default function ActivityPage(props) {
  const { activityName, slug, search } = props.activity;
  const { location, exercise, environment } = props;
  const foundPlaces = [];

  // look through all previously found places and grab the ones
  // which have a type matching the slug of this components activity
  props.places.forEach((p) => {
    if (p.type === slug) {
      foundPlaces.push(...p.places);
    }
  });

  if (foundPlaces.length === 0) {
    props.searchPlaces(slug, search);
  }

  return (
    <>
      <Grid
        container
        direction="column"
        spacing={3}
        style={{
          marginTop: 10,
          paddingLeft: 30,
          paddingRight: 30,
          alignItems: "center",
        }}
      >
        <Grid item xs={8} style={{ width: "100%" }}>
          <PreferencesCard
            location={location}
            exercise={exercise}
            environment={environment}
          />
        </Grid>

        <Grid item style={{ width: "100%" }}>
          <Grid
            container
            style={{ position: "relative", justifyContent: "center" }}
          >
            <Button
              component={Link}
              to="/suggestions"
              startIcon={<ArrowBackIcon />}
              style={{ position: "absolute", left: 0 }}
            >
              <Hidden smDown> Back to activities</Hidden>
            </Button>

            <div>
              <div style={{ alignItems: "center" }}>
                <Typography variant="h5">{activityName}</Typography>
              </div>
            </div>
          </Grid>

          <Grid item>
            <Divider
              style={{
                marginBottom: 15,
              }}
            />
          </Grid>
        </Grid>

        <Grid container direction="row" justify="center" spacing={5}>
          {foundPlaces.length > 0 ? (
            foundPlaces.slice(0).map((p, idx) => {
              return (
                <Grid item md={3} style={{ width: "100%" }}>
                  <ActivityCard place={p} />
                </Grid>
              );
            })
          ) : (
            <Grid item md={4}>
              <Typography variant="h6">Loading... </Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
}
