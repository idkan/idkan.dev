/*
  Any File inside the folder page/api is mapped to /api/* and
  will be treated as an API endpoint insetead of a static page.
*/

import { GraphQLClient, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export default async function comments (req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_API_TOKEN}`
    }
  })

  const query = gql`
    mutation createComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: { name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug } } }) {
        id
      }
    }
  `

  const result = await graphQLClient.request(query, req.body)

  return res.status(200).send(result)
}
