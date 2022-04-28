import { gql, useQuery } from "@apollo/client";
import { Chip, Card, CardContent, Grid, Typography } from "@mui/material";
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
  console.log("data: ", company);
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
      <Typography gutterBottom>Company Info</Typography>
      <Grid container>
        <Grid item xs={12}>
          <Typography gutterBottom>Summary</Typography>
          <Typography>{summary}</Typography>
        </Grid>

        <Grid container spacing={3} sx={{mt: 1, mb: 1}}>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Chip label="CEO" color="primary" />
                <Typography sx={{ p: 2 }}>{ceo}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Chip label="COO" color="primary" />
                <Typography sx={{ p: 2 }}>{coo}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Chip label="CTO" color="primary" />
                <Typography sx={{ p: 2 }}>{cto}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Chip label="CTO_Propulsion" color="primary" />
                <Typography sx={{ p: 2 }}>{cto_propulsion}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography>Employees</Typography>
          <Typography>{employees}</Typography>
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
    </>
  );
};
