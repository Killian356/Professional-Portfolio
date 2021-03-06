import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SkillsFE from "../../utils/skillsFE";
import SkillsBE from "../../utils/skillsBE";
import resumePDF from "../../assets/resume/Resume.pdf";

const useStyles = makeStyles(() => ({
  root: {
    backgroundAttachment: `fixed`,
    width: `90%`,
    height: `100vh`,
    justifyContent: `center`,
    fontFamily: `Poppins`,
  },
  button: {
    color: "white",
    background: `orange`,
    fontSize: "1.5rem",
    margin: `2vh`,
    fontFamily: "Poppins",
    fontWeight: 400,
    "&:hover": {
      color: `#5bb381`,
    },
  },

  heading: {
    marginTop: `15vh`,
    fontFamily: `Poppins`,
    color: `#5bb381`,
    fontSize: `2rem`,
    weight: 900,
    justifyContent: `center`,
  },

  skills: {
    justifyContent: `center`,
    marginLeft: `5vw`,
    marginRight: `5vw`,
  },
  skillbox: {
    justifyContent: `center`,
  },
  h2: {
    color: `#5bb381`,
    marginTop: `2vh`,
    marginBottom: `2vh`,
    alignContent: `center`,

    fontFamily: `Poppins`,
    fontSize: `1.5rem`,
  },
  resume: {
    marginBottom: `15vh`,
  },
}));
const Resume = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.box} container justify="center">
        <Typography className={classes.heading}>Adam's Toolkit</Typography>
      </Grid>
      <Grid container justify="center" className={classes.skillbox}>
        <Typography className={classes.h2}>Front End</Typography>{" "}
      </Grid>
      <Grid container justify="center">
        {SkillsFE.skills}
      </Grid>

      <Grid container justify="center" className={classes.skillbox}>
        <Typography className={classes.h2}>Back End</Typography>{" "}
      </Grid>
      <Grid container justify="center">
        {SkillsBE.skills}
      </Grid>
      <Grid container justify="center" className={classes.resume}>
        <Button
          className={classes.button}
          variant="outlined"
          target="_blank"
          href={resumePDF}
        >
          Download Resum??
        </Button>
      </Grid>
    </div>
  );
};

export default Resume;
