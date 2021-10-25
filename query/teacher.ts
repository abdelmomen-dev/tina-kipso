import { gql } from "@apollo/client";
export const GET_TEACHERS = gql`
  query crs_instructor {
    crs_instructor {
      id
      name
      ext_data
      media
    }
  }
`;
