import { gql, useQuery } from "@apollo/client";
import { Box, Chip, Card, CardContent, Grid, Typography } from "@mui/material";
import ElonMusk from "../../images/ElonMusk.jpg";
import GwynneShotwell from "../../images/GwynneShotwell.jpg";
import TomMueller from "../../images/TomMueller.jpg";
import Employees from "../../images/Employees.jpg";
const GET_COMPANY_INFO = gql`
  query ExampleQuery {
    company {
      ceo
      cto_propulsion
      cto
      coo
      employees
      founded
      founder
      headquarters {
        address
        city
        state
      }
      launch_sites
      summary
      test_sites
      valuation
      vehicles
    }
  }
`;

export const GetCompanyInfo = () => {
  const { loading, error, data } = useQuery(GET_COMPANY_INFO);

  if (loading) return <></>;
  if (error) return "Error";

  const { company } = data;
  const {
    ceo,
    coo,
    cto,
    cto_propulsion,
    employees,
    founded,
    founder,
    headquarters,
    launch_sites,
    summary,
    test_sites,
    valuation,
    vehicles,
  } = company;
  const { address, city, state } = headquarters;
  return (
    <>
      <Typography gutterBottom variant="h2">
        Company Info
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3">Summary</Typography>
          <Typography variant="body1">{summary}</Typography>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 1, mb: 1 }}>
          <Grid item xs={12} md={3}>
            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
              <img
                src={ElonMusk}
                alt="Elon Musk"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "0",
                  backgroundColor: "black",
                  height: "100%",
                  width: "100%",
                  opacity: "0.6",
                  overflow: "hidden",
                }}
              ></Box>
              <Chip
                label="CEO"
                color="primary"
                sx={{ position: "absolute", top: "5px", left: "5px" }}
              />
              <Typography
                variant="h6"
                sx={{
                  p: 2,
                  color: "white",
                  position: "absolute",
                  left: "15%",
                  bottom: "0%",
                }}
              >
                {ceo}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
              <img
                src={GwynneShotwell}
                alt="Gwynne Shotwell"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "0",
                  backgroundColor: "black",
                  height: "100%",
                  width: "100%",
                  opacity: "0.6",
                  overflow: "hidden",
                }}
              ></Box>
              <Chip
                label="COO"
                color="primary"
                sx={{ position: "absolute", top: "5px", left: "5px" }}
              />
              <Typography
                variant="h6"
                sx={{
                  p: 2,
                  color: "white",
                  position: "absolute",
                  left: "15%",
                  bottom: "0%",
                }}
              >
                {coo}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
              <img
                src={ElonMusk}
                alt="Elon Musk"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "0",
                  backgroundColor: "black",
                  height: "100%",
                  width: "100%",
                  opacity: "0.6",
                  overflow: "hidden",
                }}
              ></Box>
              <Chip
                label="CTO"
                color="primary"
                sx={{ position: "absolute", top: "5px", left: "5px" }}
              />
              <Typography
                variant="h6"
                sx={{
                  p: 2,
                  color: "white",
                  position: "absolute",
                  left: "15%",
                  bottom: "0%",
                }}
              >
                {cto}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
              <img
                src={TomMueller}
                alt="Tom Mueller"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "0",
                  backgroundColor: "black",
                  height: "100%",
                  width: "100%",
                  opacity: "0.6",
                  overflow: "hidden",
                }}
              ></Box>
              <Chip
                label="CTO Propulsion"
                color="primary"
                sx={{ position: "absolute", top: "5px", left: "5px" }}
              />
              <Typography
                variant="h6"
                sx={{
                  p: 2,
                  color: "white",
                  position: "absolute",
                  left: "15%",
                  bottom: "0%",
                }}
              >
                {cto_propulsion}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">Other Information</Typography>
        </Grid>
        {/* PUT Individual cards for info below: */}
        <Grid container spacing={1}>
          <Grid item xs={12} md={3}>
            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
              <img
                src={Employees}
                alt="Employees"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
                 <Box
                sx={{
                  position: "absolute",
                  top: "0",
                  backgroundColor: "black",
                  height: "100%",
                  width: "100%",
                  opacity: "0.6",
                  overflow: "hidden",
                }}
              ></Box>
              <Typography sx={{position: "absolute", top: "40%", left: "25%", color: "white"}}>Employees:</Typography>
              <Typography sx={{position: "absolute", top: "60%", left: "25%", color: "white"}}>{employees}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography>Founded</Typography>
            <Typography>{founded}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Founder</Typography>
            <Typography>{founder}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Headquarters</Typography>
            <Typography>{address}</Typography>
            <Typography>{city}</Typography>
            <Typography>{state}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Launch Sites</Typography>
            <Typography>{launch_sites}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography>Test Sites</Typography>
            <Typography>{test_sites}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Valuation</Typography>
            <Typography>{valuation}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Vehicles</Typography>
            <Typography>{vehicles}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
