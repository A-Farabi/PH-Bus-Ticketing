const allSeat = document.getElementsByClassName('seat')
for (const seat of allSeat) {
  seat.addEventListener("click", function(event) {
    // seat.classList.add('green-color')
    const name = event.target.parentNode.childNodes[3].innerText;
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

  })
}




