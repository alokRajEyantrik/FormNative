import { MongoClient } from 'mongodb';
import { MONGODB_URI } from '$env/static/private';

const client = new MongoClient(MONGODB_URI);
await client.connect();

export const db = client.db('testing-mobile-app');
export const Users = db.collection('users');
