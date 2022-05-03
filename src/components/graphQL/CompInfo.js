import { gql, useQuery } from "@apollo/client";
import { Box, Chip, Grid, Typography } from "@mui/material";
import ElonMusk from "../../images/ElonMusk.jpg";
import GwynneShotwell from "../../images/GwynneShotwell.jpg";
import TomMueller from "../../images/TomMueller.jpg";
import Employees from "../../images/Employees.jpg";
import SpaceXFactory from "../../images/SpaceXFactory.jpg";
import SpaceXFactoryTwo from "../../images/SpaceXFactory2.jpg";
import LaunchSite from "../../images/LaunchSite.jpg";
import Facilities from "../../images/Facilities.jpg";
import Valuation from "../../images/Valuation.jpg";
import Vehicles from "../../images/Vehicles.jpg";
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
          <Grid item sm={12} md={6} sx={{width: "100%"}}>
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
                sx={{ position: "absolute", top: "5px", left: "5px", letterSpacing: "3px", fontWeight: "bold" }}
              />
              <Typography
                variant="h6"
                sx={{
                  p: 2,
                  color: "white",
                  position: "absolute",
                  left: "0px",
                  top: "30px",
                  letterSpacing: "2px"
                }}
              >
                {ceo}
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={6} sx={{width: "100%"}}>
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
                sx={{ position: "absolute", top: "5px", left: "5px",  letterSpacing: "3px", fontWeight: "bold" }}
              />
              <Typography
                variant="h6"
                sx={{
                  p: 2,
                  color: "white",
                  position: "absolute",
                  left: "0px",
                  top: "30px",
                  letterSpacing: "2px"
                }}
              >
                {coo}
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={6} sx={{width: "100%"}}>
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
                sx={{ position: "absolute", top: "5px", left: "5px",  letterSpacing: "3px", fontWeight: "bold" }}
              />
              <Typography
                variant="h6"
                sx={{
                  p: 2,
                  color: "white",
                  position: "absolute",
                  left: "0px",
                  top: "30px",
                  letterSpacing: "2px"
                }}
              >
                {cto}
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={6} sx={{width: "100%"}}>
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
                sx={{ position: "absolute", top: "5px", left: "5px",  letterSpacing: "3px", fontWeight: "bold" }}
              />
              <Typography
                variant="h6"
                sx={{
                  p: 2,
                  color: "white",
                  position: "absolute",
                  left: "0px",
                  top: "30px",
                  letterSpacing: "2px"
                }}
              >
                {cto_propulsion}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ mt: 2, mb: 1 }}>
          <Typography variant="h3">Other Information</Typography>
        </Grid>
        {/* PUT Individual cards for info below: */}
        <Grid container>
          <Grid item sm={12} md={4}>
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
              <Typography
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: "25%",
                  color: "white",
                }}
              >
                Employees:
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "25%",
                  color: "white",
                }}
              >
                {employees}
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={4} sx={{ width: "100%" }}>
            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
              <img
                src={SpaceXFactory}
                alt="Space X Factory"
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
              <Typography
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: "25%",
                  color: "white",
                }}
              >
                Founded:
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "25%",
                  color: "white",
                }}
              >
                {founded}
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={4} sx={{width: "100%"}}>
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
              <Typography
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: "25%",
                  color: "white",
                }}
              >
                Founder:
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "25%",
                  color: "white",
                }}
              >
                {founder}
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={4}>
            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
              <img
                src={SpaceXFactoryTwo}
                alt="Space X Factory"
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
              <Typography
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: "25%",
                  color: "white",
                }}
              >
                Headquarters:
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "25%",
                  color: "white",
                }}
              >
                {address}
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  top: "60%",
                  left: "25%",
                  color: "white",
                }}
              >
                {city}
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  top: "70%",
                  left: "25%",
                  color: "white",
                }}
              >
                {state}
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={4}>
            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
              <img
                src={LaunchSite}
                alt="Launch Site"
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
              <Typography
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: "25%",
                  color: "white",
                }}
              >
                Launch Sites:
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "25%",
                  color: "white",
                }}
              >
                {launch_sites}
              </Typography>
            </Box>
          </Grid>

          <Grid item sm={12} md={4}>
            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
              <img
                src={Facilities}
                alt="Facilities"
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
              <Typography
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: "25%",
                  color: "white",
                }}
              >
                Test Sites
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "25%",
                  color: "white",
                }}
              >
                {test_sites}
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={4}>
            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
              <img
                src={Valuation}
                alt="Valuation"
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
              <Typography
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: "25%",
                  color: "white",
                }}
              >
                Valuation:
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "25%",
                  color: "white",
                }}
              >
                {valuation}
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={4} sx={{ width: "100%" }}>
            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
              <img
                src={Vehicles}
                alt="Vehicles"
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
              <Typography
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: "25%",
                  color: "white",
                }}
              >
                Vehicles:
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "25%",
                  color: "white",
                }}
              >
                {vehicles}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
