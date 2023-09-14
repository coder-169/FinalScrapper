import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Your MongoDB connection URI
console.log('uri', uri);
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

export async function connectToDatabase() {
  if (!client.isConnected) { // Use client.isConnected as a property
    await client.connect();
  }
  return client.db('sc'); // Replace 'your-database-name' with your actual database name
}
