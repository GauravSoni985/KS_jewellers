import { Client, Account, Databases, Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1") // Appwrite endpoint
  .setProject("68ca2f05002f5c422e8d"); // Project ID

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

// Environment variables
export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
export const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
export const BUCKET_ID = import.meta.env.VITE_APPWRITE_BUCKET_ID;
