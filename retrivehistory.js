let id = JSON.parse(localStorage.getItem("id"));
    console.log(id);

let arraylist = JSON.parse(localStorage.getItem("searchhistory"))
    console.log(arraylist)

let books = arraylist[id].data;
    console.log(books)
        

    const bookcards = document.getElementById('bookcards')
    //document.getElementById("title").innerHTML = `<p>Search Result for "${}" :</p>`
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