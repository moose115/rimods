import { MongoClient, ServerApiVersion } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: ServerApiVersion.v1,
});

export default client;
