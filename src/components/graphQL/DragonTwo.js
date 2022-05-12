import { gql, useQuery } from "@apollo/client";

import { Loading } from "../Loading";

import {
  Avatar,
  Box,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

// Images
import DragonTwoOne from "../../images/Dragon2One.jpg";
import DragonTwoTwo from "../../images/Dragon2Two.jpg";
import DragonTwoThree from "../../images/Dragon2Three.jpg";
import DragonTwoFour from "../../images/Dragon2Four.jpg";
import DragonTwoFive from "../../images/Dragon2Five.jpg";
import DragonTwoSix from "../../images/Dragon2Six.jpg";
const GET_DRAGON_TWO_INFO = gql`
  query ExampleQuery {
    dragon(id: "dragon2") {
      name
      active
      description
      crew_capacity
      diameter {
        meters
      }
      dry_mass_kg
      height_w_trunk {
        meters
      }
      first_flight
      orbit_duration_yr
    }
  }
`;

export const GetDragonTwoInfo = () => {
  const { loading, error, data } = useQuery(GET_DRAGON_TWO_INFO);
  if (loading) return <Loading />;
  if (error) return "Error";

  const { dragon } = data;
  const {
    name,
    active,
    description,
    crew_capacity,
    diameter,
    dry_mass_kg,
    height_w_trunk,
    first_flight,
    orbit_duration_yr,
  } = dragon;

  return (
    <Box>
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
      <Typography>{description}</Typography>

      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={DragonTwoOne} alt="Dragon 2 in space" />
          </ListItemAvatar>
          <ListItemText primary="Crew Capacity" secondary={crew_capacity} />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar src={DragonTwoTwo} alt="Dragon 2 in space" />
          </ListItemAvatar>
          <ListItemText primary="Diameter" secondary={`${diameter.meters} m`} />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar src={DragonTwoThree} alt="Dragon 2 in space" />
          </ListItemAvatar>
          <ListItemText primary="Dry Mass" secondary={`${dry_mass_kg} kg`} />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar src={DragonTwoFour} alt="Dragon 2 in space" />
          </ListItemAvatar>
          <ListItemText
            primary="Height With Trunk"
            secondary={`${height_w_trunk.meters} m`}
          />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar src={DragonTwoFive} alt="Dragon 2 in space" />
          </ListItemAvatar>
          <ListItemText primary="First Flight" secondary={first_flight} />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar src={DragonTwoSix} alt="Dragon 2 in space" />
          </ListItemAvatar>
          <ListItemText
            primary="Orbit Duration"
            secondary={`${orbit_duration_yr} yr`}
          />
        </ListItem>
      </List>
    </Box>
  );
};
