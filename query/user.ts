import { gql } from "@apollo/client";

export const USER_FIELDS = `
id
name
email
ext_data
media
`;

export const NEW_USER = gql`
  mutation sign_up($name: String, $email: String, $password: String) {
    insert_core_user(
      objects: [{ name: $name, email: $email, passwired: $password }]
    ) {
      affected_rows
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query core_user_by_pk($id: uuid! ){
    core_user_by_pk (id: $id) {
      ${USER_FIELDS}    
    }      
  }
`;
