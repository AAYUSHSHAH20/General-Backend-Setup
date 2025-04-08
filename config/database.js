const mongoose = require('mongoose');
const { MongoDB_HOST, MongoDB_URI, PROJECT_NAME } = require('./index');
// Connect to MongoDB

let isConnected = false;

const db = async () => {
    mongoose.connect.on('connecting', () => {
        console.log('Connecting to MongoDB...');
    });
    mongoose.connect.on('connected', () => {
        console.log('Connected to MongoDB');
    });
    mongoose.connect.on('error', (err) => {
        console.error('Error connecting to MongoDB:', err);
    });
    mongoose.connect.on('disconnected', () => {
        console.log('Disconnected from MongoDB');
    });

    const connectDatabase = async () => {
        if (isConnected) {
            return;
        }
        isConnected = true;
        try {
            await mongoose.connect(MongoDB_URI, {
                appName: PROJECT_NAME,
                heartbeatFrequencyMS: 30000,      // The frequency in milliseconds for sending heartbeat messages to check the connection status
                maxPoolSize: 100,                 // The maximum number of connections in the connection pool
                serverSelectionTimeoutMS: 30000   // The amount of time in milliseconds to attempt to select a server for an operation; if none is found, an error is thrown
            })
        }
        catch (error) {
            console.error('Failed to connect to MongoDB:', error);
            isConnected = false;
            setTimeout(async () => {
                await connectDatabase();
            }, 5000);
        }
    }

    await connectDatabase();
}

module.exports = db;