import { gql, useQuery } from "@apollo/client";

import { Loading } from "../Loading";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Images
import DarkSkyWithStars from "../../images/DarkSkyWithStars.jpg";

const GET_FALCON_ONE_INFO = gql`
  query ExampleQuery {
    rocket(id: "falcon1") {
      name
      mass {
        kg
        lb
      }
      id
      active
      boosters
      cost_per_launch
      country
      description
      diameter {
        meters
        feet
      }
      first_flight
      height {
        meters
        feet
      }
      stages
      success_rate_pct
      type
      wikipedia
    }
  }
`;

export const GetFalconOneInfo = () => {
  const { loading, error, data } = useQuery(GET_FALCON_ONE_INFO);

  if (loading) return <Loading />;
  if (error) return "Error";
  const { rocket } = data;
  const {
    active,
    boosters,
    cost_per_launch,
    country,
    description,
    diameter,
    first_flight,
    height,
    mass,
    name,
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

      <Typography sx={{ mb: 5 }}>{description}</Typography>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>First Flight Date</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ position: "relative" }}>
            <img
              src={DarkSkyWithStars}
              alt="Dark Sky With Stars"
              style={{
                width: "100%",
                height: "100px",
                objectFit: "cover",
                margin: 0,
                padding: 0,
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                top: "10px",
                left: "10px",
                color: "white",
              }}
            >
              {first_flight}
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Number of Boosters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ position: "relative" }}>
            <img
              src={DarkSkyWithStars}
              alt="Dark Sky With Stars"
              style={{
                width: "100%",
                height: "100px",
                objectFit: "cover",
                margin: 0,
                padding: 0,
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                top: "10px",
                left: "10px",
                color: "white",
              }}
            >
              {boosters}
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Cost per launch</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ position: "relative" }}>
            <img
              src={DarkSkyWithStars}
              alt="Dark Sky With Stars"
              style={{
                width: "100%",
                height: "100px",
                objectFit: "cover",
                margin: 0,
                padding: 0,
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                top: "10px",
                left: "10px",
                color: "white",
              }}
            >
              ${cost_per_launch}
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Country</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ position: "relative" }}>
            <img
              src={DarkSkyWithStars}
              alt="Dark Sky With Stars"
              style={{
                width: "100%",
                height: "100px",
                objectFit: "cover",
                margin: 0,
                padding: 0,
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                top: "10px",
                left: "10px",
                color: "white",
              }}
            >
              {country}
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography>Diameter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ position: "relative" }}>
            <img
              src={DarkSkyWithStars}
              alt="Dark Sky With Stars"
              style={{
                width: "100%",
                height: "100px",
                objectFit: "cover",
                margin: 0,
                padding: 0,
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                top: "10px",
                left: "10px",
                color: "white",
              }}
            >
              {diameter.meters} m
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                top: "30px",
                left: "10px",
                color: "white",
              }}
            >
              {diameter.feet} ft
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography>Height</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ position: "relative" }}>
            <img
              src={DarkSkyWithStars}
              alt="Dark Sky With Stars"
              style={{
                width: "100%",
                height: "100px",
                objectFit: "cover",
                margin: 0,
                padding: 0,
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                top: "10px",
                left: "10px",
                color: "white",
              }}
            >
              {height.meters} m
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                top: "30px",
                left: "10px",
                color: "white",
              }}
            >
              {height.feet} ft
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography>Mass</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ position: "relative" }}>
            <img
              src={DarkSkyWithStars}
              alt="Dark Sky With Stars"
              style={{
                width: "100%",
                height: "100px",
                objectFit: "cover",
                margin: 0,
                padding: 0,
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                top: "10px",
                left: "10px",
                color: "white",
              }}
            >
              {mass.kg} kg
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                top: "30px",
                left: "10px",
                color: "white",
              }}
            >
              {mass.lb} lb
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9a-content"
          id="panel9a-header"
        >
          <Typography>Stages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ position: "relative" }}>
            <img
              src={DarkSkyWithStars}
              alt="Dark Sky With Stars"
              style={{
                width: "100%",
                height: "100px",
                objectFit: "cover",
                margin: 0,
                padding: 0,
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                top: "10px",
                left: "10px",
                color: "white",
              }}
            >
              {stages}
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10a-content"
          id="panel10a-header"
        >
          <Typography>Success Rate</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ position: "relative" }}>
            <img
              src={DarkSkyWithStars}
              alt="Dark Sky With Stars"
              style={{
                width: "100%",
                height: "100px",
                objectFit: "cover",
                margin: 0,
                padding: 0,
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                top: "10px",
                left: "10px",
                color: "white",
              }}
            >
              {success_rate_pct}
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
