import React from "react";

import {
  makeStyles,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";

import SvgIcon from "@material-ui/core/SvgIcon";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import defaultIconPath from "../defaultIcon";

const useStyles = makeStyles((theme) => ({
  secondaryText: {
    display: "flex",
    alignItems: "center",
  },
  arrowIcon: {
    marginLeft: 4,
  },
}));

export default function OtherSuggestionsList(props) {
  const classes = useStyles();

  const { suggestedOther } = props;

  return (
    <>
      <List>
        {suggestedOther.map((act) => {
          return (
            <ListItem
              button
              href={act.search.href}
              component="a"
              target="_blank"
            >
              <ListItemAvatar>
                <SvgIcon>
                  <path d={act.iconPath ? act.iconPath : defaultIconPath} />
                </SvgIcon>
              </ListItemAvatar>
              <ListItemText
                primary={act.primary_text}
                secondary={
                  <div className={classes.secondaryText}>
                    {act.secondary_text}
                    <ArrowForwardIcon className={classes.arrowIcon} />
                  </div>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
