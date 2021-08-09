import React, { useState, useEffect } from "react";

import {
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
} from "@material-ui/core";

import SuggestedActivityCard from "./SuggestedActivityCard";

const useStyles = makeStyles((theme) => ({
  findPlacesButton: {
    marginLeft: 5,
    background: "green",
    color: "white",
  },
  closeButton: {
    color: "red",
  },
}));

function RandomActivityDialog(props) {
  const classes = useStyles();

  const { open, onClose, activities } = props;
  const n = activities.length;

  const [idx, setIdx] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (open) {
      setIdx(0);
      setRunning(true);
    }
  }, [open]);

  if (running) {
    if (idx < 16) {
      setTimeout(() => {
        setIdx(idx + 1);
      }, 50);
    } else if (idx < 20) {
      setTimeout(() => {
        setIdx(idx + 1);
      }, 100);
    } else if (idx < 24) {
      setTimeout(() => {
        setIdx(idx + 1);
      }, 200);
    } else {
      setTimeout(() => {
        var x = Math.floor(Math.random() * n);
        setIdx(x);
        setRunning(false);
      }, 200);
    }
  }

  return (
    <>
      <Dialog onClose={onClose} open={open} fullWidth>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <DialogTitle>Random Activity</DialogTitle>
          </Grid>

          <Grid item xs={12} md={6} style={{ width: "100%" }}>
            <DialogContent>
              <SuggestedActivityCard
                activity={activities[idx % n]}
                mouseControlled={false}
                alwaysShow={!running}
              />
            </DialogContent>
          </Grid>

          <Grid item xs={12}>
            <DialogActions>
              <Grid container direction="column" align="center">
                <Grid item xs={12}>
                  <Button
                    onClick={() => {
                      setIdx(0);
                      setRunning(true);
                    }}
                    disabled={running}
                  >
                    Try Again
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    className={classes.closeButton}
                    fullWidth
                    onClick={() => {
                      onClose();
                    }}
                  >
                    Close
                  </Button>
                </Grid>
              </Grid>
            </DialogActions>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}

export default RandomActivityDialog;
