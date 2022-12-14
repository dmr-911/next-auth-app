import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "../../../database/conn";

import Users from "../../../model/Schema";
import { compare } from "bcryptjs";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name : "Credentials",
      async authorize(credentials, req){
        connectMongo().catch(error =>{error : "Connection failed"});

        // check user exists 
        const result = await Users.findOne({email : credentials.email});

        if(!result){
          throw new Error("No user found")
        }

        // compare()
        const checkPassword = await compare(credentials.password, result.password);

        // incorrect password
        if(!checkPassword || result.email !== credentials.email){
          throw new Error("User name or password doesn't matched!")
        }

        return result;
      }
    })
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
