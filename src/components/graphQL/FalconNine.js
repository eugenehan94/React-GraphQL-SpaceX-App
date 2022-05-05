import React from "react";
import { gql, useQuery } from "@apollo/client";
import {
  Button,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
const GET_FALCON_NINE_INFO = gql`
  query ExampleQuery {
    rocket(id: "falcon9") {
      active
      boosters
      company
      cost_per_launch
      country
      description
      id
      name
      stages
      success_rate_pct
      type
      first_flight
    }
  }
`;
const emails = ["username@gmail.com", "user02@gmail.com"];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
    </Dialog>
  );
}

export const GetFalconNineInfo = () => {
  const { loading, error, data } = useQuery(GET_FALCON_NINE_INFO);

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  if (loading) return <></>;
  if (error) return "Error";
  const { rocket } = data;
  console.log(rocket);
  const { active, name, description } = rocket;

  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography variant="h2">{name}</Typography>
        </Grid>
        <Grid item>
          {active ? (
            <Chip
              label="Active"
              color="success"
              size="medium"
              sx={{ mt: 2, mb: 2 }}
            />
          ) : (
            <Chip
              label="Inactive"
              color="error"
              size="medium"
              sx={{ mt: 2, mb: 2 }}
            />
          )}
        </Grid>
      </Grid>

      <Typography sx={{ mb: 5 }}>{description}</Typography>

      <Grid container>
        <Grid item>
          <div>
            <Button variant="outlined" onClick={handleClickOpen}>
              Open simple dialog
            </Button>
            <SimpleDialog
              selectedValue={selectedValue}
              open={open}
              onClose={handleClose}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
};
