import { gql, useQuery } from "@apollo/client";

const GET_FALCON_NINE_INFO = gql`
query ExampleQuery {
  rocket(id: "falcon9") {
    active
    boosters
    company
    cost_per_launch
    country
    description
    id
    name
    stages
    success_rate_pct
    type
    first_flight
  }
}
`

export const GetFalconNineInfo = () => {
    const {loading, error ,data} = useQuery(GET_FALCON_NINE_INFO);

    if (loading) return<></>
    if (error) return "Error"

    return(
        <>
            Falcon9
        </>

    )
}