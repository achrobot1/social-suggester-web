import React, { useState } from "react";

import {
  makeStyles,
  Card,
  CardContent,
  Grid,
  Typography,
  Tabs,
  Tab,
  AppBar,
  Button,
} from "@material-ui/core";

import SuggestedActivityCard from "./SuggestedActivityCard";
import PreferencesCard from "./PreferencesCard";
import RandomActivityDialog from "./RandomActivityDialog";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: 8,
  },
  chip: {
    margin: 8,
    padding: 15,
  },
  card: {
    marginBottom: 20,
  },
  cardContainer: {
    position: "relative",
  },
  backdrop: {
    zIndex: 1,
    position: "absolute",
    alignItems: "flex-start",
    paddingTop: "2%",
  },
  backdropCard: {
    background: "white",
    padding: 30,
  },
  cardTitle: {
    color: "#000",
  },
  cardSubheader: {
    color: "#606060",
  },
  cantDecideButton: {
    marginTop: 10,
  },
}));

export default function SuggestedActivities(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const [buttonHover, setButtonHover] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const suggestedPlaces = props.suggestedActivities.filter((act) => {
    return act.category === "place";
  });

  const suggestedThingsToDo = props.suggestedActivities.filter((act) => {
    return act.category === "activity";
  });

  const suggestedOther = props.suggestedActivities.filter((act) => {
    return act.category === "other";
  });

  const onTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ width: "100vw" }}
      >
        <RandomActivityDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          activities={[...suggestedPlaces, ...suggestedThingsToDo]}
        />

        <Grid item xs={12} sm={10} style={{ margin: 10, width: "100%" }}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={8} style={{ width: "100%" }}>
              <PreferencesCard {...props} />
            </Grid>

            <Grid item xs={12} style={{ width: "100%" }}>
              <div
                style={{
                  textAlign: "left",
                }}
              >
                <Typography variant="h4">Suggested Activities</Typography>

                <Button
                  className={classes.cantDecideButton}
                  variant="outlined"
                  color="primary"
                  onMouseOver={() => setButtonHover(true)}
                  onMouseOut={() => setButtonHover(false)}
                  onClick={() => setDialogOpen(true)}
                >
                  {buttonHover ? "Choose Random" : "Still can't decide?"}
                </Button>
              </div>
            </Grid>

            <Grid item xs={12} style={{ width: "100%" }}>
              <Card>
                <AppBar position="static">
                  <Tabs centered fullWidth onChange={onTabChange} value={value}>
                    <Tab value={0} label="Places" />
                    <Tab value={1} label="Activities" />
                    <Tab value={2} label="Things to do" />
                  </Tabs>
                </AppBar>
                <CardContent>
                  <Grid container justify="center" spacing={5}>
                    {{
                      0: suggestedPlaces,
                      1: suggestedThingsToDo,
                      2: suggestedOther,
                    }[value].map((act) => {
                      return (
                        <Grid item xs={6} md={2}>
                          <SuggestedActivityCard
                            activity={act}
                            mouseControlled={true}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
