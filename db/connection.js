const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true
  });

const db = mongoose.connection

db.on('connected', () => {
    console.log(`Connected to MongoDB at ${db.name}:${db.port}`)
})

