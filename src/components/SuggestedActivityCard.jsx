import React, { useState } from "react";
import defaultIconPath from "../defaultIcon";
import {
  useTheme,
  makeStyles,
  SvgIcon,
  Card,
  CardContent,
  Grid,
  Typography,
  CardActionArea,
  CardActions,
} from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    background: theme.palette.primary.dark,
    "&:hover": {
      color: "#f0b63b",
      background: theme.palette.primary.main,
    },
  },
  cardAction: {
    justifyContent: "center",
    padding: 2,
    background: "white",
    color: theme.palette.primary.dark,
    transitionProperty: "opacity",
    transitionDuration: "500ms",
  },
}));

function SuggestedActivityCard(props) {
  const { activity, mouseControlled, alwaysShow } = props;
  const [show, setShow] = useState(mouseControlled ? false : alwaysShow);

  const theme = useTheme();
  const classes = useStyles(theme);

  const actionAreaProps = {};

  if (props.activity.category === "other") {
    actionAreaProps["component"] = "a";
    actionAreaProps["href"] = props.activity.search.href;
    actionAreaProps["target"] = "_blank";
  } else {
    actionAreaProps["component"] = Link;
    actionAreaProps["to"] = props.activity.slug;
  }

  return (
    <>
      <Card
        className={classes.card}
        onMouseOver={() => {
          if (mouseControlled) {
            setShow(true);
          }
        }}
        onMouseOut={() => {
          if (mouseControlled) {
            setShow(false);
          }
        }}
      >
        <CardActionArea {...actionAreaProps}>
          <CardContent style={{ paddingBottom: 0 }}>
            <Grid container direction="column" align="center">
              <Grid item>
                <SvgIcon fontSize="large" className={classes.icon}>
                  <path
                    d={activity.iconPath ? activity.iconPath : defaultIconPath}
                  />
                </SvgIcon>
              </Grid>

              <Grid item>
                {/* <Typography variant="subtitle1" noWrap> */}
                <Typography variant="subtitle1">
                  {activity.activityName}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>

          <CardActions
            style={{
              marginTop: 0,
              // opacity: show ? 1 : 0,
              opacity: mouseControlled ? (show ? 1 : 0) : alwaysShow & 1,
            }}
            className={classes.cardAction}
          >
            <Typography variant="subtitle1">Find places</Typography>
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  );
}

export default SuggestedActivityCard;
