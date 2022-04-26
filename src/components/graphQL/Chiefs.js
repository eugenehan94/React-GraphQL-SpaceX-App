import { gql, useQuery } from "@apollo/client";
import { Grid, Typography } from "@mui/material";
const GET_CHIEFS = gql`
  query ExampleQuery {
    company {
      ceo
      cto_propulsion
      cto
      coo
    }
  }
`;

export const GetChiefs = () => {
  const { loading, error, data } = useQuery(GET_CHIEFS);

  if (loading) return <></>;
  if (error) return "Error";
  const { company } = data;

  return (
    <Grid container >
      <Grid item xs={3}>
        <Typography>CEO</Typography>
        <Typography>{company.ceo}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>COO</Typography>
        <Typography>{company.coo}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>CTO</Typography>
        <Typography>{company.cto}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>CTO_Propulsion</Typography>
        <Typography>{company.cto_propulsion}</Typography>
      </Grid>
    </Grid>
  );
};
