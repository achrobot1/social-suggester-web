import React, { useState, useEffect } from "react";
import "./Main.css";

import {
  makeStyles,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardActionArea,
  useTheme,
} from "@material-ui/core";

import OpenInNewIcon from "@material-ui/icons/OpenInNew";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 10,
  },
  cardFeatured: {
    borderLeftWidth: 6,
    borderLeftStyle: "outset",
    borderLeftColor: theme.palette.primary.light,

    borderTopWidth: 6,
    borderTopStyle: "outset",
    borderTopColor: theme.palette.primary.light,
    borderRadius: 10,
  },
  cardHeader: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingBottom: 0,
    textAlign: "left",
  },
  cardTitle: {
    fontSize: 18,
  },
  cardSubheader: {
    fontSize: 12,
  },
  cardButton: {
    textTransform: "none",
    fontSize: 14,
  },
}));

export default function ActivityCard(props) {
  const { place, featured } = props;
  const [photoSrc, setPhotoSrc] = useState("");

  const theme = useTheme();
  const classes = useStyles(theme);

  const url = encodeURI(
    // `https://google.com/maps/search/${place.name} ${place.formatted_address}`
    `https://www.google.com/maps/search/?api=1&query=${place.name} ${place.formatted_address}`
  );

  useEffect(() => {
    if (place.photos && place.photos.length > 0) {
      setPhotoSrc(place.photos[0].getUrl());
    }
  }, [place.photos]);

  return (
    <>
      <Card
        className={featured ? classes.cardFeatured : classes.card}
        raised={featured}
        variant="elevation"
      >
        <CardActionArea href={url} target="_blank">
          <CardMedia component="img" height="140" image={photoSrc} />
        </CardActionArea>

        <CardHeader
          className={classes.cardHeader}
          classes={{
            title: classes.cardTitle,
            subheader: classes.cardSubheader,
          }}
          title={place.name}
          subheader={place.formatted_address}
        />

        <CardActions>
          <Button
            className={classes.cardButton}
            color="primary"
            variant={"contained"}
            target="_blank"
            size="small"
            href={url}
            endIcon={<OpenInNewIcon />}
          >
            More Info
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
