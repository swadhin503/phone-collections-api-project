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
                onclick="phoneDetails(${phone.slug})"
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

const phoneDetails = id => {
    const idUrl = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(idUrl)
    .then(res => res.json())
    .then(data => console.log(data));
 }