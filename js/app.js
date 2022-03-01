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
    .then(data => searchResult(data.data[0]));

    const searchResult = data =>{
        const parentDiv = document.getElementById('card-container');
        const cardShow = parentDiv.innerHTML
    }
}
