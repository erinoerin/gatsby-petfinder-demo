import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Index({ data }) {
  const { edges: posts } = data.allPetfinderAnimals;
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Check out the animals~</h1>
      <div className="blog-posts">
        {posts.map(({ node: post }) => {
          return (
            <div>
              <h1>
                <Link to={`/${post.type}-${post.name}-${post.breeds.primary}/`}>
                  {post.name}
                  <img src={post.primary_photo_cropped.small} alt={post.name} />
                </Link>
              </h1>
            </div>
          );
        })}
      </div>
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
