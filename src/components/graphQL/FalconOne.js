import {gql, useQuery} from "@apollo/client";
import { Typography } from "@mui/material";

const GET_FALCON_ONE_INFO = gql`
query ExampleQuery {
  rocket(id: "falcon1") {
    name
    mass {
      kg
    }
    id
    active
    boosters
    cost_per_launch
    country
    description
    diameter {
      meters
    }
    first_flight
    height {
      meters
    }
    stages
    success_rate_pct
    type
    wikipedia
  }
}
`

export const GetFalconOneInfo = () => {
    const {loading, error, data} = useQuery(GET_FALCON_ONE_INFO);

    if (loading) return <></>;
    if (error) return "Error";
    console.log("data: ", data)
    return(
      <>
      <Typography>Falcon One</Typography>
      </>
    )
}