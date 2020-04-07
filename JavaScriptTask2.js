const interestCalculator = data => {
  let interestData = [];

  for(let i in data) {
    let item = data[i];
    item.rate = getRate(item);

    const interest = (item.principal * item.rate * item.time) / 100;

    item.interest = interest;

    interestData.push(item);
  }

  console.log("interest data", interestData);
  return interestData;
}

const getRate = item => {
  if(item.principal >= 2500)
  {
    if(item.time > 1 && item.time < 3)
      return 3;

    if(item.time > 3)
      return 4;

    return 1;
  } 
  
  if(item.principal < 2500 || item.time < 1) {
    return 2;
  }
  
  return 1;
}

let data = [
  { principal: 2500, time: 1.8 },
  { principal: 1000, time: 5 },
  { principal: 3000, time: 1 },
  { principal: 2000, time: 3 },
];

interestCalculator(data);