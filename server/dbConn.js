//import pg --> postgres management package
import pg from "pg";
//config .env file --> dotenv is a package to manage our .env file
import dotenv from "dotenv";
dotenv.config();
//set up a connection pool
// export const db = new pg.Pool({connectionString: process.env.DATABASE_URL,});

//set up a connection pool
export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});