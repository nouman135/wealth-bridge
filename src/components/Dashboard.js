import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import ModalComponent from "./ModalComponent";
import AddIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    position: "relative",
  },
  addButton: {
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
  container: {
    maxWidth: "100%",
  },
  list: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  const [investmentIdeas, setInvestmentIdeas] = useState([
    {
      id: 1,
      title: "Tech Stocks",
      description: "Invest in leading technology companies",
    },
    {
      id: 2,
      title: "Real Estate Investment Trusts",
      description: "in real estate without the hassle of property management",
    },
    {
      id: 3,
      title: "Green Energy",
      description: "Invest in renewable energy companies",
    },
  ]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Button
              variant="contained"
              color="primary"
              className={classes.addButton}
            >
              <AddIcon />
              <ModalComponent />
            </Button>
            <Typography variant="h4" gutterBottom>
              Investment Ideas
            </Typography>
            <div className={classes.container}>
              <List className={classes.list}>
                {investmentIdeas.map((idea) => (
                  <div key={idea.id}>
                    <ListItem>
                      <ListItemText
                        primary={idea.title}
                        secondary={idea.description}
                      />
                      <DeleteIcon />
                      <EditIcon />
                    </ListItem>
                    <Divider />
                  </div>
                ))}
              </List>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
