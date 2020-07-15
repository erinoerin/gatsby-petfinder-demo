import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2em;
  row-gap: 2em;
`;

const AnimalCard = styled.div`
  border: 1px solid #888;
  border-radius: 5px;
  box-shadow: 5px 5px #888888;
  padding: 1em;
`;

export default function Index({ data }) {
  const { edges: posts } = data.allPetfinderAnimals;
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Check out the animals~</h1>
      <BlogPosts className="blog-posts">
        {posts.map(({ node: post }) => {
          return (
            <AnimalCard>
              <h2>
                <Link to={`/${post.type}-${post.name}-${post.breeds.primary}/`}>
                  {post.name}
                </Link>
              </h2>
              <Link to={`/${post.type}-${post.name}-${post.breeds.primary}/`}>
                <img src={post.primary_photo_cropped.small} alt={post.name} />
              </Link>
            </AnimalCard>
          );
        })}
      </BlogPosts>
    </Layout>
  );
}
export const pageQuery = graphql`
  query IndexQuery {
    allPetfinderAnimals {
      edges {
        node {
          id
          type
          name
          breeds {
            primary
          }
          primary_photo_cropped {
            small
          }
        }
      }
    }
  }
`;
