import {
  makeStyles,
  Avatar,
  Hidden,
  List,
  ListItem,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "50%",
    height: "auto",
    opacity: "0.6",
    marginTop: "3vh",
    marginBottom: "3vh",
  },
  exampleUsageAvatar: {
    width: "80%",
    height: "auto",
    marginTop: "3vh",
    marginBottom: "3vh",
    border: "1px solid white",
  },
  dividerRight: {
    borderStyle: "solid",
    borderColor: "rgba(122, 120, 120, 0.4)",
    borderWidth: "0 1px 0 0",
  },
  dividerLeft: {
    borderStyle: "solid",
    borderColor: "rgba(122, 120, 120, 0.4)",
    borderWidth: "0 0 0 1px",
  },
}));

function HowItWorks() {
  const classes = useStyles();

  return (
    <>
      <Grid container direction="column">
        <Grid
          item
          style={{
            paddingTop: "5vh",
            paddingBottom: "5vh",
            background: "rgb(15, 16, 20)",
          }}
        >
          <Grid container>
            <Hidden mdDown>
              <Grid item xs={0} md={4} className={classes.dividerRight}>
                {/* Left column - images */}
                <Grid container direction="column" align="center">
                  <Grid item>
                    <Avatar
                      src="/images/hiking-square.jpg"
                      variant="circle"
                      className={classes.avatar}
                    ></Avatar>
                  </Grid>

                  <Grid item>
                    <Avatar
                      src="/images/museum-square.jpg"
                      variant="circle"
                      className={classes.avatar}
                    ></Avatar>
                  </Grid>
                </Grid>
              </Grid>
            </Hidden>

            <Grid item xs={12} md={8} align="center">
              {/* Right column - text */}
              <Typography
                style={{ textAlign: "center" }}
                variant="h3"
                gutterBottom
              >
                What is Social Suggester?
              </Typography>

              <Typography
                style={{ width: "80%", textAlign: "left", opacity: "0.5" }}
                variant="body1"
              >
                Spending time with friends and family should always be fresh and
                exciting. It is especially fun when you go new places, try new
                things, or do an activity that everyone is in the mood for.
              </Typography>
              <br />

              <Typography
                style={{ width: "80%", textAlign: "left", opacity: "0.5" }}
                variant="body1"
              >
                But of course, this is always easier said than done. If you are
                anything like me and my friends, you probably encounter the
                'What should we do today?' dilemma all too often.
              </Typography>
              <br />
              <Typography
                style={{ width: "80%", textAlign: "left", opacity: "0.5" }}
                variant="body1"
              >
                Social Suggester is the solution to this problem. All that is
                needed is your location and preferences, and Social Suggester
                will find you places and activities that match your preferences.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          style={{
            paddingTop: "5vh",
            paddingBottom: "5vh",
          }}
        >
          <Grid container direction="column">
            <Grid item xs={12}>
              <Typography
                style={{ textAlign: "center" }}
                variant="h3"
                gutterBottom
              >
                How Does it work?
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                <Hidden mdDown>
                  <Grid item xs={0} md={8} className={classes.dividerRight}>
                    {/* right column - images */}
                    <Grid container direction="column" align="center">
                      <Grid item>
                        <Avatar
                          src="/images/sample-usage1.png"
                          variant="rounded"
                          className={classes.exampleUsageAvatar}
                        ></Avatar>
                      </Grid>

                      <Grid item>
                        <Avatar
                          src="/images/sample-usage2.png"
                          variant="rounded"
                          className={classes.exampleUsageAvatar}
                        ></Avatar>
                      </Grid>
                    </Grid>
                  </Grid>
                </Hidden>

                <Grid item xs={12} md={4} align="center">
                  {/* Left column - text */}
                  <Typography
                    style={{ width: "80%", textAlign: "left" }}
                    variant="body1"
                  >
                    Social Suggester provides suggestions for places to visit or
                    activities to do that match the user's preferences. It
                    utilizes the Google Places API to search for relevant places
                    based on the user's preferences. All you have to do is:
                    <List>
                      <ListItem>- Enter your location</ListItem>

                      <ListItem>- Select your desired preferences</ListItem>

                      <ListItem>
                        - Browse all activities matching your preferences
                      </ListItem>

                      <ListItem>
                        - Find places near you for your desired activity
                      </ListItem>
                    </List>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default HowItWorks;
