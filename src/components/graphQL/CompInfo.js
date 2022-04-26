import { gql, useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
const GET_COMPANY_INFO = gql`
  query ExampleQuery {
    company {
      employees
      founded
      founder
      headquarters {
        address
        city
        state
      }
      launch_sites
      name
      summary
      test_sites
      valuation
      vehicles
    }
  }
`;

export const GetCompanyInfo = () =>{
    const {loading, error, data} = useQuery(GET_COMPANY_INFO);

    if (loading) return <></>;
    if (error) return "Error";
    console.log("data: ", data)
    return(
        <Grid container>
            <Grid item></Grid>
        </Grid>
    )
}