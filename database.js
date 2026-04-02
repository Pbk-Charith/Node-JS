const {MongoClient} = require("mongodb")

const url = "mongodb+srv://pbcharith01:CHARith2001@namastenode.nt8qzct.mongodb.net/";

const client = new MongoClient(url);

const dbName = 'HelloWorld';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection("Users");

  const data = {
    name: "Charith",
    age: 22,
    email: "pbcharith01@gmail.com"
    };

    const data1 = {
      name: "John",
      age: 30,
      email: "john@gmail.com"
    };

    const data2 = {
      name: "Jane",
      age: 25,
      email: "jane@gmail.com"
    };

    // const insertResult = await collection.insertMany([data, data1, data2]);
    // console.log('Inserted documents =>', insertResult);

  // the following code examples can be pasted here...
  // const findResult = await collection.find({}).toArray();
  // console.log('Found documents =>', findResult);

  // const filteredDocs = await collection.find({ name: "Charith" }).toArray();
  // console.log('Found documents filtered by { name: "Charith" } =>', filteredDocs);

  // const deleteResult = await collection.deleteMany({ email: "pbcharith01@gmail.com" });
  // console.log('Deleted documents =>', deleteResult);

  // const updateResult = await collection.updateOne({ name: "Charith" }, { $set: { age: 23 } });
  // console.log('Updated documents =>', updateResult);

  // const countresult = await collection.countDocuments({});
  // console.log('Total documents =>', countresult);

  const result = await collection.find({age: 25}).toArray();
  console.log('All documents =>', result);

  return 'done.';
}


main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());