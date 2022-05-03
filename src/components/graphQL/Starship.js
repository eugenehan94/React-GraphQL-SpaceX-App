import {gql, useQuery} from "@apollo/client";

const GET_STARSHIP_INFO = gql`
query ExampleQuery {
  rocket(id: "starship") {
    id
  }
}
`

export const GetStarshipInfo = () => {
    const {loading, error, data} = useQuery(GET_STARSHIP_INFO);

    if (loading) return<></>
    if (error) return "Error"

    return(
        <>
        Starship
        </>
    )
}