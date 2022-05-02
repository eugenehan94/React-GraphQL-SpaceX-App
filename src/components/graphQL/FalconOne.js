import { gql, useQuery } from "@apollo/client";
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
`;

export const GetFalconOneInfo = () => {
  const { loading, error, data } = useQuery(GET_FALCON_ONE_INFO);

  if (loading) return <></>;
  if (error) return "Error";
  const { rocket } = data;
  console.log("rocket: ", rocket);
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
    <>
      <Typography gutterBottom variant="h2">
        {name}
      </Typography>
      <Typography>
        {active}
      </Typography>
      <Typography>
        {description}
      </Typography>
      <Typography >
        Boosters: {boosters}
      </Typography>
      <Typography >
        Cost per launch: ${cost_per_launch}
      </Typography>
      <Typography >
        Country: {country}
      </Typography>
      <Typography >
        {diameter.meters}
      </Typography>
      <Typography >
        {first_flight}
      </Typography>
      <Typography>
        {height.meters}
      </Typography>
      <Typography >
        {mass.kg}
      </Typography>
      <Typography >
        {stages}
      </Typography>
      <Typography>
        {success_rate_pct}
      </Typography>
    </>
  );
};
