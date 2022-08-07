const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  let a =1 
  let b = 2 

  let c = a+b
  res.send('sơn đẹp trai')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
