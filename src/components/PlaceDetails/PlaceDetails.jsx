import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from "./styles";
const PlaceDetails = ({ place, selected, refProp }) => {
   if (selected)
     refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  console.log("==================",refProp)
  console.log("*********",selected)
   const classes = useStyles();
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place?.photo
            ? place?.photo?.images?.large?.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place?.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place?.name ? place?.name : ""}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend">
            {place.num_reviews} review{place.num_reviews > 1 && "s"}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">
            {place?.price_level ? "Price" : ""}
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            {place?.price_level ? place?.price_level : ""}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">
            {place?.ranking ? "Ranking" : ""}
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            {place?.ranking ? place?.ranking : ""}
          </Typography>
        </Box>
        {place?.awards &&
          place?.awards?.map((award) => (
            <Box
              display="flex"
              my={1}
              justifyContent="space-between"
              alignItems="center"
            >
              <img src={award?.images?.small} alt={award?.display_name} />
              <Typography variant="subtitle2" color="textSecondary">
                {award?.display_name}
              </Typography>
            </Box>
          ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {place?.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {place?.phone}
          </Typography>
        )}
        {place?.distance_string && (
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <i class="fas fa-people-arrows" style={{ fontSize: "22px" }}></i>{" "}
            {place?.distance_string}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place?.web_url, "_blank")}
        >
          Trip Advisor
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place?.website, "_blank")}
        >
          Website
        </Button>
      </CardActions>
    </Card>
  );
};
export default PlaceDetails;
