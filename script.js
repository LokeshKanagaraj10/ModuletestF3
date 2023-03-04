
async function searching(){
    const date = new Date();
    let search = document.getElementById("search").value;
    const arr = search.toLowerCase().split(" ");
    const query = arr.join("+");

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const data = await response.json();
    console.log(data.items)
    const books = data.items;


    const bookcards = document.getElementById('bookcards')
    document.getElementById("title").innerHTML = `<p>Search Result for "${search}" :</p>`
    bookcards.innerHTML = '';
    books.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('card');
        const coverimg = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150x200?text=No+Image';
        const authorarr = book.volumeInfo.authors;
        card.innerHTML += `
            <div class="card-img">
            <img src=${coverimg} class="card-img" alt="Book img">
            </div>
            <div class="card-body">
            <h4>Title : ${book.volumeInfo.title}</h4>
            <p>Author(s) : ${authorarr.join(", ")}</p>
            <p>Page Count : ${book.volumeInfo.pageCount}</p>
            <p>Publisher : ${book.volumeInfo.publisher}</p>
            <a href="${book.saleInfo.buyLink}"><button id="buybutton">Buy Now</button></a>
            </div>
            `
        bookcards.appendChild(card);
    });

    let seacharr = JSON.parse(localStorage.getItem("searchhistory"))
    const obj = {
        date : date.toLocaleString(),
        search : search,
        data : books
    }
    if(seacharr){
        seacharr.push(obj);
    }else{
        seacharr = [obj];
    }
    localStorage.setItem("searchhistory", JSON.stringify(seacharr))
}


 
function searchinghistory(){
    window.location.href="./history.html";
}

