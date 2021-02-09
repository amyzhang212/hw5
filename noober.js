function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}

function renderRides(ridesArray) {
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}

window.addEventListener('DOMContentLoaded', function() {
// new codes 

// define API to pull from

let url = 'https://kiei451.com/api/rides.json'

// all rides 

let AllRidesButton = document.querySelector('#all-filter')
AllRidesButton.addEventListener('click',async function(event) {
  console.log (`All Rides was clicked `)
  alert(`All Rides was clicked `)
let response = await fetch(url)
let jsonForRides = await response.json ()
document.querySelector('.rides').innerHTML =''
renderRides(jsonForRides) 
newArray = [] 
})

// noober pool
let NooberPoolButton = document.querySelector('#noober-pool-filter')
NooberPoolButton.addEventListener('click',async function(event) {
  console.log (`Noober Pool was clicked`)
  alert(`Noober Pool was clicked`)
let response = await fetch(url)
let jsonForRides = await response.json ()
document.querySelector('.rides').innerHTML =''
newArray = []

for (let i=0; i<jsonForRides.length;i++){
  let ride=jsonForRides[i]
  console.log(ride)

if (levelOfService(ride) == "Noober Pool"){
newArray.push(ride)
console.log(newArray)
}
}
renderRides(newArray) 
})

// noober purple '
let NooberPurpleButton = document.querySelector('#noober-purple-filter')
NooberPurpleButton.addEventListener('click',async function(event){
  console.log (`Noober Purple was clicked`)
  alert (`Noober Purple was clicked `)

let response = await fetch(url)
let jsonForRides = await response.json ()
document.querySelector('.rides').innerHTML =''
newArray = []

for (let i=0; i<jsonForRides.length;i++){
  let ride=jsonForRides[i]
  console.log(ride)

if (levelOfService(ride) == "Noober Purple"){
newArray.push(ride)
console.log(newArray)
}
}
renderRides(newArray) 
})

// noober xl
let NooberXLButton = document.querySelector('#noober-xl-filter')
NooberXLButton.addEventListener('click',async function(event) {
  console.log (`Noober XL was clicked `)
  alert (`Noober XL was clicked `)

let response = await fetch(url)
let jsonForRides = await response.json ()
document.querySelector('.rides').innerHTML =''
newArray = []

for (let i=0; i<jsonForRides.length;i++){
  let ride=jsonForRides[i]
  console.log(ride)

if (levelOfService(ride) == "Noober XL"){
newArray.push(ride)
console.log(newArray)
}
}
renderRides(newArray) 
})
// noober x
let NooberXButton = document.querySelector('#noober-x-filter')
NooberXButton.addEventListener('click',async function(event) {
  console.log(`Noober X was clicked `)
  alert(`Noober X was clicked `)

let response = await fetch(url)
let jsonForRides = await response.json ()
document.querySelector('.rides').innerHTML =''
newArray = []

for (let i=0; i<jsonForRides.length;i++){
  let ride=jsonForRides[i]
  console.log(ride)

if (levelOfService(ride) == "Noober X"){
newArray.push(ride)
console.log(newArray)
}
}
renderRides(newArray) 
})

}) 
