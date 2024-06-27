import { Client, Databases, Account } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('667c235d0020f0dcf0a4');

export const account = new Account(client);
export const databases = new Databases(client);
