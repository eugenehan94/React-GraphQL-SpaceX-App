import { gql, useQuery } from "@apollo/client";

const GET_DRAGON_ONE_INFO = gql`
  query ExampleQuery {
    dragon(id: "dragon1") {
      id
    }
  }
`;

export const GetDragonOneInfo = () => {
  const { loading, error, data } = useQuery(GET_DRAGON_ONE_INFO);
  if (loading) return <></>;
  if (error) return "Error";
  return <>Dragon one</>;
};
