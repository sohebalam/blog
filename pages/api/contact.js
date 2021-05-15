import { MongoClient } from "mongodb"

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body

    if (
      !email ||
      !email.includes(
        "@" || !name || name.trim === "" || !message || message.trim === ""
      )
    ) {
      res.status(422).json({ message: "invalid input" })
      return
    }
    const newMessage = {
      email,
      name,
      message,
    }
    let client
    try {
      client = await MongoClient.connect(process.env.DB)
    } catch (error) {
      res.status(500).json({ message: "could not connect to DB" })
    }

    const db = client.db()

    try {
      const result = await db.collection("messages").insertOne(newMessage)
      newMessage.id = result.insertedId
    } catch (error) {
      res.status(500).json({ message: "could not store message" })
    }

    client.close()
    res
      .status(201)
      .json({ message: "Success storing mesage", message: newMessage })
  }
}

export default handler
