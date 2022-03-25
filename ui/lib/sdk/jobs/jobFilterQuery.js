import gql from 'graphql-tag'

export default gql`
  query Job($maxRate: Int $types: [String]){
    search(maxPayRate: $maxRate, types: $types){
      type,
      description,
      location{
        city,
        state
      },
      schedule,
      payRate{
        ... on PayRate {
          value
        }
        ... on PayRange {
          range
        }
      }
    }
  }
`
