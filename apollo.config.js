module.exports = {
  client: {
    excludes: ['**/generated/graphql.tsx'],
    addTypename: false,
    service: {
      name: 'neofelis',
      localSchemaFile: './graphql.schema.json',
    }
  }
};
