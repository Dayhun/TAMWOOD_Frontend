const mongoPass = "0000";
const username = "imdahyeon5";
// const mongoPass = "PJu9TOzda4AGgKYi";
// const username = "guiforssetto07";

const url = `mongodb+srv://${username}:${mongoPass}@cluster0.ppes4kr.mongodb.net/?retryWrites=true&w=majority`;

const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient(url, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function pingDb() {
    try {
        //Open connection with the database
        await client.connect();
        await client.db("sample_airbnb").command({ ping: 1 });
        console.log("Database connected succesfully");
    } finally {
        //Always close your connection
        await client.close();
    }
}

// pingDb(); //Database connected succesfully

// Terminal
// cd server.js
// node server.js

async function findSet() {
    try {
        //Create a connection with the database
        await client.connect();
        // Select the collection from database selected
        const database = client.db("sample_airbnb");
        const collection = database.collection("listingsAndReviews");
        // Set the limit of the query (2~5limit)
        // $gt: the minimum number
        // $li: the maximum number
        // $ne: true
        const query = { guests_included: { $gt: 2, $lt: 6 } };
        // Set the options available
        const options = {
            sort: { bedrooms: 1 }, // Which attribute will be sorted
            projection: {
                // Which attribute will be available in your result
                // If 1 = true
                _id: 1,
                name: 1,
                minimum_nights: 1,
                maximum_nights: 1,
                number_of_reviews: 1,
                room_type: 1,
                price: 1,
            },
        };
        //Get all the results (show 5 limit)
        const cursor = collection.find(query, options).limit(5);
        //no limit case
        // const cursor = collection.find({}, options).limit(5);
        for await (let result of cursor) {
            // const unit = {
            //     _id: result._id,
            //     name: result.name,
            //     minimum_nights: result.minimum_nights,
            //     maximum_nights: result.maximum_nights,
            //     number_of_reviews: result.number_of_reviews,
            //     room_type: result.room_type,
            //     price: parseFloat(result.price),
            // };
            // console.dir(unit);
            console.dir(result);
            console.dir(parseFloat(result.price));
        }
    } finally {
        //Always remember to close your connection
        await client.close();
    }
}

// findSet().catch(console.dir);

async function findOne() {
    try {
        await client.connect();
        const database = client.db("sample_airbnb");
        const collection = database.collection("listingsAndReviews");

        const query = { name: "Horto flat with small garden" };

        const options = {
            projection: {
                _id: 1,
                name: 1,
                description: 1,
                property_type: 1,
            }
        }

        //const result = await collection.findOne(query); //findOne just need query
        const result = await collection.findOne(query, options); //findOne just need query
        console.log(result);
    } finally {
        await client.close();
    }
}

findOne().catch(console.dir);
