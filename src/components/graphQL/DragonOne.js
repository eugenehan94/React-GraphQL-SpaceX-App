import { gql, useQuery } from "@apollo/client";

import { Loading } from "../Loading";

import { Box, Chip, Grid, Typography } from "@mui/material";
import ReduceCapacityIcon from "@mui/icons-material/ReduceCapacity";
import FlightIcon from "@mui/icons-material/Flight";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import CircleIcon from "@mui/icons-material/Circle";
import ScaleIcon from "@mui/icons-material/Scale";
import HeightIcon from "@mui/icons-material/Height";
const GET_DRAGON_ONE_INFO = gql`
  query ExampleQuery {
    dragon(id: "dragon1") {
      active
      name
      description
      crew_capacity
      first_flight
      orbit_duration_yr
      diameter {
        meters
      }
      dry_mass_kg
      height_w_trunk {
        meters
      }
    }
  }
`;

export const GetDragonOneInfo = () => {
  const { loading, error, data } = useQuery(GET_DRAGON_ONE_INFO);
  if (loading) return <Loading />;
  if (error) return "Error";

  const { dragon } = data;
  const {
    active,
    name,
    description,
    crew_capacity,
    first_flight,
    orbit_duration_yr,
    diameter,
    dry_mass_kg,
    height_w_trunk,
  } = dragon;

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
      <Typography>{description}</Typography>

      <Grid container spacing={3} sx={{ mt: 5 }}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              backgroundColor: "#89c764",
              borderRadius: "50%",
              "&:hover": { transform: "scale(1.1)", transition: "0.3s" },
              transition: "0.3s",
              mb: 2,
            }}
          >
            <ReduceCapacityIcon sx={{ fontSize: "5rem" }} />
          </Box>
          <Typography sx={{ fontWeight: "bold" }}>Crew Capacity</Typography>
          <Typography>{crew_capacity}</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              backgroundColor: "#fec34d",
              borderRadius: "50%",
              "&:hover": { transform: "scale(1.1)", transition: "0.3s" },
              transition: "0.3s",
              mb: 2,
            }}
          >
            <FlightIcon sx={{ fontSize: "5rem" }} />
          </Box>
          <Typography sx={{ fontWeight: "bold" }}>First Flight</Typography>
          <Typography>{first_flight}</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              backgroundColor: "#50af8c",
              borderRadius: "50%",
              "&:hover": { transform: "scale(1.1)", transition: "0.3s" },
              transition: "0.3s",
              mb: 2,
            }}
          >
            <TravelExploreIcon sx={{ fontSize: "5rem" }} />
          </Box>
          <Typography sx={{ fontWeight: "bold" }}>Orbit Duration</Typography>
          <Typography>{orbit_duration_yr} years</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              backgroundColor: "#ee5256",
              borderRadius: "50%",
              "&:hover": { transform: "scale(1.1)", transition: "0.3s" },
              transition: "0.3s",
              mb: 2,
            }}
          >
            <CircleIcon sx={{ fontSize: "5rem" }} />
          </Box>
          <Typography sx={{ fontWeight: "bold" }}>Diameter</Typography>
          <Typography>{diameter.meters} m</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              backgroundColor: "#75bee9",
              borderRadius: "50%",
              "&:hover": { transform: "scale(1.1)", transition: "0.3s" },
              transition: "0.3s",
              mb: 2,
            }}
          >
            <ScaleIcon sx={{ fontSize: "5rem" }} />
          </Box>
          <Typography sx={{ fontWeight: "bold" }}>Dry Mass</Typography>
          <Typography>{dry_mass_kg} kg</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              backgroundColor: "#e97575",
              borderRadius: "50%",
              "&:hover": { transform: "scale(1.1)", transition: "0.3s" },
              transition: "0.3s",
              mb: 2,
            }}
          >
            <HeightIcon sx={{ fontSize: "5rem" }} />
          </Box>
          <Typography sx={{ fontWeight: "bold" }}>Height with Trunk</Typography>
          <Typography>{height_w_trunk.meters} m</Typography>
        </Grid>
      </Grid>
    </>
  );
};
