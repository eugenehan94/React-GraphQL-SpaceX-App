import { gql, useQuery } from "@apollo/client";

const GET_DRAGON_TWO_INFO = gql`
  query ExampleQuery {
    dragon(id: "dragon2") {
      id
    }
  }
`;

export const GetDragonTwoInfo = () => {
  const { loading, error, data } = useQuery(GET_DRAGON_TWO_INFO);
  if (loading) return <></>;
  if (error) return "Error";

  return <>Dragon Two</>;
};
