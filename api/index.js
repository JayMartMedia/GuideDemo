// Setup following: https://graphql.org/graphql-js/running-an-express-graphql-server/

const express = require('express');
const { generateGuides } = require('./guides');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');

// Generate the guides in memory
const guides = generateGuides();

function filterGuides({types, maxPayRate}) {
  return guides.filter((guide) => {
    const maxPay = guide.payRate.value || guide.payRate.range[0];
    return (
      (!types || types.includes(guide.type)) &&
      (!maxPayRate || maxPayRate >= maxPay)
    );
  });
  return guides
}

// The root provides a resolver function for each API endpoint (mapped to schema)
const root = {
  search: filterGuides
};

const port = process.env.PORT || 4000;

const app = express();
app.use(cors({
  origin: [
    'http://localhost:3000',
    // hosted
    'https://guide-demo-jaymartmedia.vercel.app',
    // hosted test branches
    // TODO: Move out and comment
    /^(https:\/\/guide-demo)[\w\d-]+(-jaymartmedia\.vercel\.app)(\/.+$)*/
  ],
  optionsSuccessStatus: 200
}));
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(port);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');