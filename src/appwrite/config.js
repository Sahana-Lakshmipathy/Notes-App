import { Client, Databases} from 'appwrite';

const client = new Client();
client
   // Your Appwrite endpoint
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Your Appwrite project ID

const databases = new Databases(client);

export { client, databases };console.log('Client initialized:', client);
console.log('Databases initialized:', databases);
