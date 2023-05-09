import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Container } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
  },
  link: {
    textDecoration: "none",
  },
}));

function UserHub() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h1" className={classes.title}>
          UserHub
        </Typography>
        <Typography variant="h4" className={classes.subtitle}>
          A platform for managing user accounts and permissions.
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices
          turpis eget tortor interdum, a posuere tellus pulvinar. Curabitur
          fringilla sollicitudin quam, nec hendrerit elit efficitur eget.
        </Typography>
      </Container>
    </div>
  );
}

export default UserHub;
