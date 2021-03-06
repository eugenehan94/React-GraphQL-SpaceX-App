import { gql, useQuery } from "@apollo/client";

import { Loading } from "../Loading";

import { Box, Grid, Chip, Typography } from "@mui/material";
import RocketIcon from "@mui/icons-material/Rocket";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import GradeIcon from "@mui/icons-material/Grade";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CircleIcon from "@mui/icons-material/Circle";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HeightIcon from "@mui/icons-material/Height";
const GET_STARSHIP_INFO = gql`
  query ExampleQuery {
    rocket(id: "starship") {
      name
      description
      active
      boosters
      cost_per_launch
      first_flight
      stages
      success_rate_pct
      diameter {
        meters
      }
      mass {
        kg
      }
      height {
        meters
      }
    }
  }
`;

export const GetStarshipInfo = () => {
  const { loading, error, data } = useQuery(GET_STARSHIP_INFO);

  if (loading) return <Loading />;
  if (error) return "Error";

  const { rocket } = data;
  const {
    name,
    description,
    active,
    boosters,
    cost_per_launch,
    first_flight,
    stages,
    success_rate_pct,
    diameter,
    mass,
    height,
  } = rocket;

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

      <Grid container sx={{ mt: 2 }}>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "#5acda6",
            p: 5,
          }}
        >
          <RocketIcon
            sx={{
              mb: 3,
              color: "white",
              fontSize: "5rem",
              "&:hover": { transform: "scale(1.2)", transition: "0.3s" },
              transition: "0.3s",
            }}
          />
          <Typography
            sx={{ color: "white", fontWeight: "bold", fontSize: "1.5rem" }}
          >
            Boosters
          </Typography>
          <Typography sx={{ color: "white" }}>{boosters}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "#91ac41",
            p: 5,
          }}
        >
          <RocketLaunchIcon
            sx={{
              mb: 3,
              color: "white",
              fontSize: "5rem",
              "&:hover": { transform: "scale(1.2)", transition: "0.3s" },
              transition: "0.3s",
            }}
          />
          <Typography
            sx={{ color: "white", fontWeight: "bold", fontSize: "1.5rem" }}
          >
            Cost Per
          </Typography>
          <Typography
            sx={{ color: "white", fontWeight: "bold", fontSize: "1.5rem" }}
          >
            Launch
          </Typography>
          <Typography sx={{ color: "white" }}>${cost_per_launch}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "#e4b476",
            p: 5,
          }}
        >
          <SatelliteAltIcon
            sx={{
              mb: 3,
              color: "white",
              fontSize: "5rem",
              "&:hover": { transform: "scale(1.2)", transition: "0.3s" },
              transition: "0.3s",
            }}
          />
          <Typography
            sx={{ color: "white", fontWeight: "bold", fontSize: "1.5rem" }}
          >
            First Flight
          </Typography>
          <Typography sx={{ color: "white" }}>{first_flight}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "#f69dad",
            p: 5,
          }}
        >
          <GradeIcon
            sx={{
              mb: 3,
              color: "white",
              fontSize: "5rem",
              "&:hover": { transform: "scale(1.2)", transition: "0.3s" },
              transition: "0.3s",
            }}
          />
          <Typography
            sx={{ color: "white", fontWeight: "bold", fontSize: "1.5rem" }}
          >
            Stages
          </Typography>
          <Typography sx={{ color: "white" }}>{stages}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "#e4b476",
            p: 5,
          }}
        >
          <CheckBoxIcon
            sx={{
              mb: 3,
              color: "white",
              fontSize: "5rem",
              "&:hover": { transform: "scale(1.2)", transition: "0.3s" },
              transition: "0.3s",
            }}
          />
          <Typography
            align="center"
            sx={{ color: "white", fontWeight: "bold", fontSize: "1.5rem" }}
          >
            Success Rate:
          </Typography>
          <Typography sx={{ color: "white" }}>{success_rate_pct}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "#f69dad",
            p: 5,
          }}
        >
          <CircleIcon
            sx={{
              mb: 3,
              color: "white",
              fontSize: "5rem",
              "&:hover": { transform: "scale(1.2)", transition: "0.3s" },
              transition: "0.3s",
            }}
          />
          <Typography
            align="center"
            sx={{ color: "white", fontWeight: "bold", fontSize: "1.5rem" }}
          >
            Diameter
          </Typography>
          <Typography sx={{ color: "white" }}>{diameter.meters} m</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "#91ac41",
            p: 5,
          }}
        >
          <FitnessCenterIcon
            sx={{
              mb: 3,
              color: "white",
              fontSize: "5rem",
              "&:hover": { transform: "scale(1.2)", transition: "0.3s" },
              transition: "0.3s",
            }}
          />
          <Typography
            align="center"
            sx={{ color: "white", fontWeight: "bold", fontSize: "1.5rem" }}
          >
            Mass
          </Typography>
          <Typography sx={{ color: "white" }}>{mass.kg} kg</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "#5acda6",
            p: 5,
          }}
        >
          <HeightIcon
            sx={{
              mb: 3,
              color: "white",
              fontSize: "5rem",
              "&:hover": { transform: "scale(1.2)", transition: "0.3s" },
              transition: "0.3s",
            }}
          />
          <Typography
            align="center"
            sx={{ color: "white", fontWeight: "bold", fontSize: "1.5rem" }}
          >
            Height
          </Typography>
          <Typography sx={{ color: "white" }}>{height.meters} m</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
