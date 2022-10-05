import mongodb, { MongoClient } from 'mongodb'


const handler = async (req, res) => {
  const client = await MongoClient.connect(
    'mongodb+srv://admin:FDhrhY7waLr4sR7@cluster0.itladkj.mongodb.net/?retryWrites=true&w=majority'
  )

  //create the database

  const db = client.db('Books')
  if (req.method === 'GET') {
    const books = await db.collection('Books').find().sort().toArray()
    if (!books) {
      res.status(500).json({ message: 'Internal Server Error' })
    } else {
      res.status(200).send({ message: books })
    }
  } else if (req.method === 'POST') {
    const { title, description, imgUrl } = req.body
    const newBook = {
      title, description, imgUrl
    }
    const postToDb = await db.collection('Books').insertOne(newBook)
    return res.status(201).send({ message: "Added", books: newBook })
  }
}

export default handler