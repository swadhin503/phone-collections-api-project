// Function for searching phone
const phoneSearching = () => {
    // Getting Input Fields Value
    const searchInput = document.getElementById('input-value');
    const searchText = searchInput.value;
    // console.log(searchValue);
    searchInput.value ="";
    
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => searchResult(data.data));

    const searchResult = phones =>{
        // console.log(phones);
        const parentDiv = document.getElementById('card-container');

 if(phones.length > 0){
    for(const phone of phones.slice(0,20)){
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div class="card">
          <img src="${phone.image}" class="card-img-top p-3" alt="..." />
          <div class="card-body">
            <h3 class="card-title">${phone.phone_name}</h3>
        <h5>Brand Name: ${phone.brand}</h5>

            <button
                onclick="phoneDetails()"
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
 parentDiv.textContent='';
    }
}
