const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/Table', (req, res) => {
  const {number} = req.body;
  if(typeof number !== "number") return res.json(`Please input a number.`);
  const multiplicationTableNumber = [];
  let multipliedNumber = 1;

  //A loop where I store the values of the multiplication table from 1 to 10 of the entered number.
  while (multiplicationTableNumber.length < 10) {
    const multiplicationResult = multipliedNumber * number;
    multiplicationTableNumber.push(multiplicationResult);
    multipliedNumber++;
  }
  
  return res.json(`The multiplication table from 1 to 10 of the number ${number} is ${multiplicationTableNumber}.`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});