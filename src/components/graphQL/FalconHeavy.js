import { gql, useQuery } from "@apollo/client";

import { Loading } from "../Loading";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
// Images
import FalconHeavyOne from "../../images/FalconHeavyHero.jpg";
import FalconHeavyTwo from "../../images/FalconHeavyTwo.jpg";
import FalconHeavyThree from "../../images/FalconHeavyThree.jpg";
import FalconHeavyFour from "../../images/FalconHeavyFour.jpg";
import FalconHeavyFive from "../../images/FalconHeavyFive.jpg";
import FalconHeavySix from "../../images/FalconHeavySix.jpg";
import FalconHeavySeven from "../../images/FalconHeavySeven.jpg";
import FalconHeavyEight from "../../images/FalconHeavyEight.jpg";
const GET_FALCON_HEAVY_INFO = gql`
  query ExampleQuery {
    rocket(id: "falconheavy") {
      active
      name
      boosters
      description
      cost_per_launch
      diameter {
        feet
        meters
      }
      first_flight
      height {
        feet
        meters
      }
      mass {
        kg
        lb
      }
      stages
      success_rate_pct
    }
  }
`;
export const GetFalconHeavyInfo = () => {
  const { loading, error, data } = useQuery(GET_FALCON_HEAVY_INFO);

  if (loading) return <Loading />;
  if (error) return "Error";

  const { rocket } = data;
  const {
    active,
    name,
    boosters,
    description,
    cost_per_launch,
    diameter,
    first_flight,
    height,
    mass,
    stages,
    success_rate_pct,
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
        <Grid item xs={12}>
          <Card sx={{ display: "flex", mt: 1 }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: "bold" }}>Boosters: </Typography>
              <Typography>{boosters}</Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{
                width: 150,
                height: 100,
                display: { xs: "none", sm: "none", md: "block" },
              }}
              image={FalconHeavyOne}
            />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ display: "flex", mt: 1 }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: "bold" }}>
                Cost Per Launch:{" "}
              </Typography>
              <Typography>${cost_per_launch}</Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{
                width: 150,
                height: 100,
                display: { xs: "none", sm: "none", md: "block" },
              }}
              image={FalconHeavyTwo}
            />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ display: "flex", mt: 1 }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: "bold" }}>Diameter: </Typography>
              <Typography>{diameter.meters} m</Typography>
              <Typography>{diameter.feet} ft</Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{
                width: 150,
                height: 110,
                display: { xs: "none", sm: "none", md: "block" },
              }}
              image={FalconHeavyThree}
            />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ display: "flex", mt: 1 }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: "bold" }}>
                First Flight:{" "}
              </Typography>
              <Typography>{first_flight}</Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{
                width: 150,
                height: 100,
                display: { xs: "none", sm: "none", md: "block" },
              }}
              image={FalconHeavyFour}
            />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ display: "flex", mt: 1 }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: "bold" }}>Height: </Typography>
              <Typography>{height.meters} m</Typography>
              <Typography>{height.feet} ft</Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{
                width: 150,
                height: 110,
                display: { xs: "none", sm: "none", md: "block" },
              }}
              image={FalconHeavyFive}
            />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ display: "flex", mt: 1 }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: "bold" }}>Mass: </Typography>
              <Typography>{mass.kg} kg</Typography>
              <Typography>{mass.lb} lb</Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{
                width: 150,
                height: 110,
                display: { xs: "none", sm: "none", md: "block" },
              }}
              image={FalconHeavySix}
            />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ display: "flex", mt: 1 }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: "bold" }}>Stage: </Typography>
              <Typography>{stages}</Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{
                width: 150,
                height: 100,
                display: { xs: "none", sm: "none", md: "block" },
              }}
              image={FalconHeavySeven}
            />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ display: "flex", mt: 1 }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: "bold" }}>
                Success Rate:{" "}
              </Typography>
              <Typography>{success_rate_pct} %</Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{
                width: 150,
                height: 100,
                display: { xs: "none", sm: "none", md: "block" },
              }}
              image={FalconHeavyEight}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
