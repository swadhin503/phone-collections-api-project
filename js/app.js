// Function for searching phone
const phoneSearching = () => {
    // Getting Input Fields Value
    const searchInput = document.getElementById('input-value');
    const searchText = searchInput.value;
    // console.log(searchValue);
    searchInput.value ="";
    
    const nameUrl = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(nameUrl)
    .then(res => res.json())
    .then(data => searchResult(data.data));
}

const searchResult = phones =>{
        // console.log(phones);
  const parentDiv = document.getElementById('card-container');
        parentDiv.textContent='';
  const singleParentDiv = document.getElementById('single-phone');
        singleParentDiv.textContent='';

 if(phones.length > 0){
    for(const phone of phones.slice(0,20)){
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div class="card h-100">
          <img src="${phone.image}" class="card-img-top p-3" alt="..." />
          <div class="card-body">
            <h3 class="card-title">${phone.phone_name}</h3>
        <h5>Brand Name: ${phone.brand}</h5>

            <button
                onclick="phoneId('${phone.slug}')"
                class="btn btn-outline-secondary btn-primary text-white mx-auto"
                type="button"
                >
                Show Details
            </button>
          </div>
        </div>
        `;
        parentDiv.appendChild(div);
       
    }
 }
 else{
    const div = document.createElement('div');
    div.innerHTML=`
    <h1 class="text-center">No Results Found</h1>
    `;
    const blankDiv = document.getElementById('blank-result');
    blankDiv.appendChild(div);
    parentDiv.textContent = '';
  }
 }
//  Phone Id Url
 const phoneId = id => {
    const idUrl = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(idUrl)
    .then(res => res.json())
    .then(data => showPhoneDetails(data));
 }
//  Single phone details showing
 const showPhoneDetails = id => {
    const parentDiv = document.getElementById('single-phone');
    parentDiv.textContent='';
    const div = document.createElement('div');
    div.innerHTML=`
    <div class="card mx-auto" style="width: 18rem;">
        <img src="${id.data.image}" class="card-img-top p-4" alt="...">
        <div class="card-body">
             <h2>${id.data.name}</h2>
             <h3>Brand Name: ${id.data.brand}</h3>
             <p>Memory: ${id.data.mainFeatures.storage}</p>
             <p>Sensors: ${id.data.mainFeatures.sensors}</p>
             <p>WLAN: ${id.data.others.WLAN}</p>
             <p>Bluetooth: ${id.data.others.Bluetooth}</p>             
             <p>Release Date: ${id.data.releaseDate || 'Release date coming soon'}</p>             

        </div>
  </div>
    `;
    
    parentDiv.appendChild(div);
 }
 
