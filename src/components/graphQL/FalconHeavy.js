import {gql, useQuery} from "@apollo/client";

const GET_FALCON_HEAVY_INFO = gql`
query ExampleQuery {
  rocket(id: "falconheavy") {
    active
    boosters
  }
}
`
export const GetFalconHeavyInfo = () => {
    const {loading, error, data} = useQuery(GET_FALCON_HEAVY_INFO);

    if (loading) return<></>
    if (error) return "Error";

    return(
        <>
        FalconHeavy
        </>
    )
}