const url = "mongodb+srv://imdahyeon5:0000@cluster0.ppes4kr.mongodb.net/?retryWrites=true&w=majority";

const { MongoClient, ServerApiVersion } = require("mongodb");
const client = new MongoClient(url, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErros: true,
    },
});

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Database connect succesfully!");
    } finally {
        await client.close();
    }
}

// run().catch(console.dir);

async function getMovies() {
    try {
        await client.connect();
        const database = client.db("sample_mflix");
        const catalog = database.collection("movies");
        const theater = { runtime: { $lt: 15 } };
        const options = {
            sort: { id: 1 },
            projection: { _id: 0, title: 1, imdb:1, runtime: 1 },
        };
        const cursor = catalog.find(theater, options);
        for await (const doc of cursor) {
            console.dir(doc);
        }
    } finally {
        await client.close();
    }
}
getMovies().catch(console.dir);
