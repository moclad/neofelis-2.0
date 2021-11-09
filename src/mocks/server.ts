/*
const AppSerializer = Serializer.extend({
  embed: true,
  root: false,
});

export const mockServer = () => {
  return createServer({
    serializers: {
      application: AppSerializer,
    },

    models: {
      user: Model.extend({}),
    },

    factories: {
      user: UserFactory,
    },

    seeds(server) {
      userSeeds(server);
    },

    routes() {
      this.namespace = '/api';

      AuthRoutes(this);
      UsersRoutes(this);
      AccountRoutes(this);

      this.namespace = '/';
      this.passthrough();
    },
  });
};
*/
