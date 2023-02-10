import jwt from 'jsonwebtoken';
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GithubProvider from 'next-auth/providers/github';

import { TypeORMLegacyAdapter } from '@next-auth/typeorm-legacy-adapter';

export default NextAuth({
  pages: {
    signIn: '/neofelis/login',
    verifyRequest: '/neofelis/verify-request',
    error: '/neofelis/error',
  },
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
        };
      },
    }),
  ],
  adapter: TypeORMLegacyAdapter({
    type: 'postgres',
    applicationName: 'Neofelis',
    host: process.env.DATABASE_HOST,
    port: +(process.env.DATABASE_PORT || 5432),
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
  secret: process.env.NEXT_SECRET,
  session: {
    strategy: 'database',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
    async encode({ token }) {
      const tokenContents = {
        id: token?.id,
        name: token?.name,
        email: token?.email,
        picture: token?.picture,
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['admin', 'user'],
          'x-hasura-default-role': 'user',
          'x-hasura-role': 'user',
          'x-hasura-user-id': token?.id,
        },
        iat: Date.now() / 1000,
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
        sub: token?.id,
      };

      const jwtSecret = JSON.parse(process.env.AUTH_PRIVATE_KEY);

      const encodedToken = jwt.sign(tokenContents, jwtSecret.key, {
        algorithm: jwtSecret.type,
      });

      return encodedToken;
    },
    async decode({ token }) {
      const jwtSecret = JSON.parse(process.env.AUTH_PRIVATE_KEY);

      const decodedToken = jwt.verify(token, jwtSecret.key, {
        algorithms: jwtSecret.type,
      });

      return decodedToken;
    },
  },
  debug: true,

  callbacks: {
    async session({ session, user }) {
      session.id = user.id;

      return Promise.resolve(session);
    },
    async jwt({ token, user }) {
      const isSignIn = user ? true : false;

      if (isSignIn) {
        token.id = user?.id;
      }

      return Promise.resolve(token);
    },
  },
});
