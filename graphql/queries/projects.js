import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
{
  projects {
    id
    name
    description
    full_name
    git_url
    owner
    isprivate
    node_id
    stargazers_count
  }
}
`;
