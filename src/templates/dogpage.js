import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";

const Article = styled.article`
  @media (max-width: 750px) {
    padding: 0 2em;
    max-width: 100vw;
  }
  @media (max-width: 500px) {
    img {
      max-width: 450px;
      height: auto;
      width: 100%;
    }
  }
`;

export default ({ data }) => {
  const post = data.petfinderAnimals;
  return (
    <Layout>
      <Article>
        <h1>Hi, I'm {post.name}!</h1>
        <p>
          {post.description}{" "}
          <a href={post.url}>Read more about me on my page on Petfinder!</a>
        </p>
        <img src={post.primary_photo_cropped.medium} alt={post.name} />
        <ul>
          <li>Name: {post.name}</li>
          <li>
            Breeds: {post.breeds.primary}, {post.breeds.secondary}
          </li>
          <li>Gender: {post.gender}</li>
          <li>Age: {post.age}</li>
          <li>Status: {post.status}</li>
          <li>House Trained: {post.attributes.house_trained ? "yes" : "no"}</li>
          <li>
            Vaccines Up to Date: {post.attributes.shots_current ? "yes" : "no"}
          </li>
          <li>
            Spayed/Neutered: {post.attributes.spayed_neutered ? "yes" : "no"}
          </li>
          <li>Special Needs: {post.attributes.special_needs ? "yes" : "no"}</li>
          <li>Good with Cats: {post.environment.cats ? "yes" : "no"}</li>
          <li>Good with Dogs: {post.environment.dogs ? "yes" : "no"}</li>
          <li>Good with Kids: {post.environment.children ? "yes" : "no"}</li>
        </ul>

        {post.photos.map((photo) => (
          <img key={photo} src={photo.medium} alt={post.name} />
        ))}
      </Article>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    petfinderAnimals(id: { eq: $id }) {
      id
      url
      name
      description
      type
      breeds {
        mixed
        primary
        secondary
        unknown
      }
      gender
      age
      coat
      size
      species
      status
      tags
      photos {
        full
        large
        medium
        small
      }
      primary_photo_cropped {
        full
        large
        medium
        small
      }
      status_changed_at
      contact {
        email
        phone
      }
      attributes {
        house_trained
        shots_current
        spayed_neutered
        special_needs
      }
      environment {
        cats
        children
        dogs
      }
      organization_id
    }
  }
`;
