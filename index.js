const allSeat = document.getElementsByClassName('seat')
for (const seat of allSeat) {
  seat.addEventListener("click", function(event) {
    seat.classList.add('green-color');
    const name = event.target.innerText;
    console.log(name);
    const SeatClass = 'Economy';
    const price = 550;
    
    const seatContainer = document.getElementById('seat-details') 
    
    const div = document.createElement("div");
    div.classList.add('flex')
    div.classList.add('justify-between')
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    
    p1.innerText = name;
    p2.innerText = SeatClass;
    p3.innerText = price;
    
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)
    
    seatContainer.appendChild(div)
    
    parseInt(price)
    updateTotalCost(price)
    updateGrandTotal()

    seatCount()
    

  })
}


function updateTotalCost(price) {
  const previousTotal = document.getElementById('total-cost').innerText
  const convertedTotal = parseInt(previousTotal)
  const currentPrice = price
  const sum = convertedTotal + currentPrice
  document.getElementById('total-cost').innerText = sum
}


function updateGrandTotal(control) {
  const totalCostValue = getConvertedValue('total-cost')
  // console.log(totalCostValue);
  const couponCode = document.getElementById('coupon-code').value;
  const totalCost = document.getElementById('grand-total').innerText = totalCostValue
  
  if (control) {
    if (couponCode == 'helo') {
      const discount = totalCost * 0.2
      const test = document.getElementById('grand-total').innerText = totalCostValue - discount
      console.log(test);
    }
    else{
      return alert('Invalid, Provide a valid one')
    }
  }
}

function seatCount(){
  const seatDefaultValue = document.getElementById('seat-count').innerText
  const convertedSeat = parseInt(seatDefaultValue)
  console.log(convertedSeat);
  const seatSum = convertedSeat + 1
  document.getElementById('seat-count').innerText = seatSum
}


function getConvertedValue(id) {
  const primaryInput = document.getElementById(id).innerText
  return parseInt(primaryInput)
}

