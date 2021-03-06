import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { AddComment, AddCommentVariables } from "./__generated__/AddComment";

export const addComment = gql`
  mutation AddComment($input: AddCommentInput!) {
    addComment(input: $input) {
      clientMutationId
      commentEdge {
        node {
          key: id
          bodyText
          author {
            login
          }
        }
      }
    }
  }
`;

export class AddCommentMutation extends Mutation<
  AddComment,
  AddCommentVariables
> {}
