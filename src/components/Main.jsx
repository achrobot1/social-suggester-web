import React, { useState, useEffect } from "react";

import "./Main.css";
import routes from "../routes";
import blacklist from "../blacklist";

import { GoogleApiWrapper } from "google-maps-react";

import {
  makeStyles,
  useTheme,
  AppBar,
  Typography,
  Button,
  Toolbar,
  CssBaseline,
  Grid,
} from "@material-ui/core";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { Link, Switch, Route } from "react-router-dom";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import SuggestedActivitiesPage from "./SuggestedActivitiesPage";
import ActivityPage from "./ActivityPage";
import IntroCard from "./IntroCard";
import HowItWorks from "./HowItWorks";

import PreferencesPage from "./PreferencesPage";

var activitiesJSON = require("../activities.json");
// Shuffle the list of activities so we can select random items
activitiesJSON.sort(() => 0.5 - Math.random());

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.53), rgba(0, 0, 0, 0.53)), url(/images/beach-fire-dark.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  },
  appBar: {
    position: "fixed",
    zIndex: theme.zIndex.drawer + 1,
  },
  preferencesContent: {
    background: theme.palette.background.paper,
    padding: 30,
  },
  content: {
    flexGrow: 1,
    paddingLeft: 50,
    paddingRight: 50,
  },
  hide: {
    display: "none",
  },
}));

export function Main(props) {
  // hooks
  const theme = useTheme();
  const classes = useStyles(theme);

  // State variables
  const [location, setLocation] = useState(null);
  const [places, setPlaces] = useState([]);

  const [environmentPreference, setEnvironment] = useState({
    indoor: true,
    outdoor: true,
  });

  const [exerciseLevel, setExerciseLevel] = useState({
    minimal: true,
    light: false,
    strenuous: false,
  });

  const [suggestedActivities, setSuggestedActivities] = useState(
    getActivities()
  );

  // local variables
  var inputRef;

  // update suggested activities whenever user prefences change
  useEffect(() => {
    setSuggestedActivities(getActivities());
  }, [exerciseLevel, environmentPreference]);

  // Helper functions

  function searchPlaces(activityName, requestParams) {
    if (location) {
      const place = location;

      var request = {
        location: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        },
        radius: 50000,
        ...requestParams,
      };

      var container = document.getElementById("results");
      var service = new props.google.maps.places.PlacesService(container);

      service.textSearch(request, (results, status) => {
        if (status === props.google.maps.places.PlacesServiceStatus.OK) {
          const existingResults = places.filter((p) => {
            return p.type === activityName;
          });

          // If the places array already has entries for a given activity type,
          // do not update the state
          if (existingResults.length === 0) {
            const filteredResults = results.filter(
              (r) => !isBlacklisted(r.name)
            );

            const newPlaces = {
              type: activityName,
              places: filteredResults,
            };

            const newPlacesState = JSON.parse(JSON.stringify(places));
            newPlacesState.push(newPlaces);
            setPlaces(newPlacesState);
          }
        }
      });
    }
  }

  function isBlacklisted(name) {
    // return true if name matches a blacklist regex
    return blacklist.some((rx) => rx.test(name));
  }

  function getActivities() {
    var activities = [];

    // filter by exercise level
    const exercise = exerciseLevel;
    const desiredExerciseLevels = Object.keys(exercise).filter((level) => {
      return exercise[level];
    });

    desiredExerciseLevels.forEach((level) => {
      const validItems = activitiesJSON.filter((activity) => {
        return activity.exercise.includes(level);
      });
      activities.push(...validItems);
    });

    // filter by preferred environment (indoor/outdoor)
    const outdoor = environmentPreference.outdoor;
    const indoor = environmentPreference.indoor;

    if (!outdoor) {
      activities = activities.filter((act) => {
        return act.outdoor === "False";
      });
    }

    if (!indoor) {
      activities = activities.filter((act) => {
        return act.outdoor === "True";
      });
    }

    const uniqueActivities = [...new Set(activities)];

    return uniqueActivities;
  }

  function onExerciseChange(event, key) {
    const exerciseState = JSON.parse(JSON.stringify(exerciseLevel));

    exerciseState[key] = event.target.checked;
    setExerciseLevel(exerciseState);
  }

  function onEnvironmentChange(event, key) {
    const environmentState = JSON.parse(JSON.stringify(environmentPreference));

    environmentState[key] = event.target.checked;
    setEnvironment(environmentState);
  }

  function setInputRef(ref) {
    inputRef = ref;

    const input = inputRef;
    var container = document.getElementById("results");

    const options = {
      componentRestrictions: { country: "us" },
      fields: ["formatted_address", "geometry", "name"],
      types: ["geocode"],
    };

    const autocomplete = new props.google.maps.places.Autocomplete(
      input,
      options
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      setPlaces([]);
      setLocation(place);
      console.log(places);
    });
  }

  return (
    <>
      <div id="results"></div>
      <CssBaseline />

      <AppBar className={classes.appBar}>
        <Toolbar>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
            }}
            to={"/"}
          >
            <Typography variant="h5">Social Suggester</Typography>
          </Link>
        </Toolbar>
      </AppBar>

      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        alignItems="center"
        style={{ marginBottom: 30 }}
      >
        <Toolbar />

        <Switch>
          <TransitionGroup>
            <Route exact path="/">
              {/* <CSSTransition
                in={true}
                appear={true}
                timeout={1000}
                classNames="fade"
              > */}
              <Grid container direction="column">
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    className={classes.root}
                  >
                    <Grid item>
                      <IntroCard />
                    </Grid>
                    <Grid
                      item
                      style={{
                        width: "100%",
                        position: "absolute",
                        top: "90%",
                      }}
                    >
                      <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        endIcon={<ArrowForwardIcon />}
                        component={Link}
                        to={"/preferences"}
                      >
                        Get Started
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <HowItWorks />
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    component={Link}
                    to={"/preferences"}
                  >
                    Try it out
                  </Button>
                </Grid>
              </Grid>
              {/* </CSSTransition> */}
            </Route>

            <Route exact path="/preferences">
              <CSSTransition
                in={true}
                appear={true}
                timeout={1000}
                classNames="fade"
              >
                <PreferencesPage
                  exerciseLevel={exerciseLevel}
                  environmentPreference={environmentPreference}
                  isLocationSet={location && true}
                  location={location}
                  onExerciseChange={onExerciseChange}
                  onEnvironmentChange={onEnvironmentChange}
                  setInputRef={setInputRef}
                />
              </CSSTransition>
            </Route>

            <Route exact path="/suggestions">
              <CSSTransition
                in={true}
                appear={true}
                timeout={1000}
                classNames="fade"
              >
                <SuggestedActivitiesPage
                  suggestedActivities={suggestedActivities}
                  isLocationSet={location && true}
                  location={location}
                  environment={environmentPreference}
                  exercise={exerciseLevel}
                />
              </CSSTransition>
            </Route>

            {routes.map((r) => {
              return (
                <Route path={r.path}>
                  <ActivityPage
                    places={places}
                    activity={r.activity}
                    searchPlaces={searchPlaces}
                    location={location}
                    exercise={exerciseLevel}
                    environment={environmentPreference}
                  />
                </Route>
              );
            })}
          </TransitionGroup>
        </Switch>
      </Grid>
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(Main);
