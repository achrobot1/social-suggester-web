import React from "react";

import "./Main.css";

import {
  Typography,
  Card,
  CardContent,
  Divider,
  Grid,
} from "@material-ui/core";

import { CSSTransition } from "react-transition-group";

export default function IntroCard(props) {
  return (
    <>
      <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={6} style={{ margin: 10 }}>
            <Card
              style={{
                background: "rgba(36, 52, 77, 0.3)",
                border: "1px solid white",
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h3">
                  Don't know what to do today?
                </Typography>

                <Divider />

                <div
                  style={{
                    display: "flex",
                    alignContent: "flex-start",
                    textAlign: "left",
                    marginTop: 10,
                  }}
                >
                  <Typography variant="subtitle1" style={{ opacity: 0.8 }}>
                    There are plenty of fun things in your area that you do not
                    want to miss out on! Social Suggester can help you and your
                    friends figure out how to best spend your time today.
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CSSTransition>
    </>
  );
}
