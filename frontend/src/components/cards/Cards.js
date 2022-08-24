import React from "react";
import Cards from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardActions from "@material-ui/core/CardActions";
  
export default function Card() {
  return (
    <div>
      <Cards
        style={{
          width: 400,
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            How are you ?
          </Typography>
          <Typography variant="body2" component="p">
            Stay Happy
          </Typography>
        </CardContent>
        <CardActions>
          <button className="btn btn-danger btn-block">Delete</button>
        </CardActions>
      </Cards>
    </div>
  );
}