import jwt from 'jsonwebtoken';
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GithubProvider from 'next-auth/providers/github';

import { TypeORMLegacyAdapter } from '@next-auth/typeorm-legacy-adapter';

const jwtSecret = JSON.parse(process.env.AUTH_PRIVATE_KEY || 'secret');

export default NextAuth({
  pages: {
    signIn: '/app/login',
    verifyRequest: '/app/verify-request',
    error: '/app/error',
  },
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  adapter: TypeORMLegacyAdapter({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT || 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    ssl: process.env.NODE_ENV === 'production',
    extra: process.env.NODE_ENV === 'production' && {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  }),
  session: {
    strategy: 'database',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    secret: 'Z33gSJUZhwo+sdYQcYmmkahiQFPt7PLaP+EROFWjuw0EBS+5jUJAZTsSp5Oo++e3',
    maxAge: 60 * 60 * 24 * 30,
    async encode({ secret, token, maxAge }) {
      const tokenContents = {
        id: token.id,
        name: token.name,
        email: token.email,
        picture: token.picture,
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['admin', 'user'],
          'x-hasura-default-role': 'user',
          'x-hasura-role': 'user',
          'x-hasura-user-id': token.id,
        },
        iat: Date.now() / 1000,
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
        sub: token.id,
      };

      const encodedToken = jwt.sign(tokenContents, jwtSecret.key, {
        algorithm: jwtSecret.type,
      });

      return encodedToken;
    },
    async decode({ token }) {
      const decodedToken = jwt.verify(token, jwtSecret.key, {
        algorithms: jwtSecret.type,
      });

      return decodedToken;
    },
  },
  debug: true,

  callbacks: {
    async session({ session, user }) {
      const encodedToken = jwt.sign(JSON.stringify(user), jwtSecret.key, {
        algorithm: jwtSecret.type,
      });

      session.id = user.id;
      session.token = encodedToken;

      return Promise.resolve(session);
    },
    async jwt({ token, user }) {
      const isSignIn = user ? true : false;

      if (isSignIn) {
        token.id = user.id;
      }

      return Promise.resolve(token);
    },
  },
});
