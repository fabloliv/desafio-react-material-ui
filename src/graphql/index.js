import { gql } from "@apollo/client";

export const GET_ALL_COUNTRIES = gql`
  query GetAllCountries($first: Int!) {
    Country(first: $first) {
      _id
      name
      capital
      alpha3Code
      nameTranslations(filter: { languageCode: "br" }) {
        value
      }
      flag {
        svgFile
      }
    }
  }
`;

export const GET_COUNTRY = gql`
  query GetCountry($countryId: String!) {
    Country(_id: $countryId) {
      _id
      name
      capital
      area
      population
      topLevelDomains {
        name
      }
      nameTranslations(filter: { languageCode: "br" }) {
        value
      }
      flag {
        svgFile
      }
    }
  }
`;
