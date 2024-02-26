import { gql } from '@apollo/client';

 export const SIGNUP = gql`
  mutation Signup($username: String!, $password: String!) {
    signup(username: $username, password: $password) {
      usernameg
      password
    }
  }
 `
 export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      password
    }
  }
 `  

