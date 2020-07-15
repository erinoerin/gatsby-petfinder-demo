import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  background: #333;
  margin-top: 1.45rem;
`;

const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  text-align: center;
  color: white;

  a {
    color: #00ced1;

    :visited {
      color: yellow;
    }
  }
`;

export default () => (
  <Footer>
    <FooterContainer>
      This site demonstrates use of the{" "}
      <a href="https://github.com/erinoerin/gatsby-source-petfinder">
        gatsby-source-petfinder
      </a>{" "}
      plugin &middot;{" "}
      <a href="https://github.com/erinoerin/gatsby-petfinder-demo">
        Github Repo
      </a>
    </FooterContainer>
  </Footer>
);
