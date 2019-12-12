const configs = {
    development: {
        apiKey: "AIzaSyCSrqC3YrIgPQ4uovIk-2aSQYiDjJU-Z-s",
        authDomain: "shoestore-4eb2c.firebaseapp.com",
        databaseURL: "https://shoestore-4eb2c.firebaseio.com",
        projectId: "shoestore-4eb2c",
        storageBucket: "shoestore-4eb2c.appspot.com",
        messagingSenderId: "88585433343",
        appId: "1:88585433343:web:f9111f63c66a6000c79cca",
        measurementId: "G-L271WX4V39"
    },
    production: {
        apiKey: "AIzaSyCSrqC3YrIgPQ4uovIk-2aSQYiDjJU-Z-s",
        authDomain: "shoestore-4eb2c.firebaseapp.com",
        databaseURL: "https://shoestore-4eb2c.firebaseio.com",
        projectId: "shoestore-4eb2c",
        storageBucket: "shoestore-4eb2c.appspot.com",
        messagingSenderId: "88585433343",
        appId: "1:88585433343:web:f9111f63c66a6000c79cca",
        measurementId: "G-L271WX4V39"
    }
} as any;

const FIREBASE_CONFIG = configs[process.env.NODE_ENV];
export default FIREBASE_CONFIG;
