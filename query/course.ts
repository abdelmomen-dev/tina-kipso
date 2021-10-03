import { gql } from "@apollo/client";
export const COURSE = gql`
  query crs_course {
    crs_course {
      id
      title_ar
      hours
      lectures
      price
      created_at
      media
      crs_category {
        title_ar
      }
      crs_instructor {
        name
      }
    }
  }
`;
