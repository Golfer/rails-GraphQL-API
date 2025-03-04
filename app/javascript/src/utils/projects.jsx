import {gql} from "@apollo/client";

const GET_PROJECTS = gql`
  query {
    projects {
      id
      name
      tasks {
        id
        name
      }
    }
  }
`;

export default GET_PROJECTS;
