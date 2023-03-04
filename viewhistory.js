

const maindiv = document.getElementById("maindiv")
 
const storedArr = JSON.parse(localStorage.getItem("searchhistory"))

let i=1;
if(storedArr){
    storedArr.forEach(obj => {
        if(obj.search){
            const firstdate = obj.date.split(",");
        //     let objectvalue = obj.search;
        //     let newarr = objectvalue.split(" ");
        //     let final = newarr.join("+");
            maindiv.innerHTML +=`
            <div id="${i-1}" class = "submaindiv" style.display = "flex">
               <div class="bookhistory">
                   <p>${i}. ${obj.search}</p>
               </div>
               <div class="displaydate">
                   <p>Searched On : ${firstdate[0]} at ${firstdate[1]} </p>
               </div>
             </div>
            `
        }
        i++;
    });
    
}else{
    maindiv.innerHTML +=`
    <p>No Search History Found</p>
    `
        
}




   let lists = document.querySelectorAll(".submaindiv");
   lists.forEach(list => {
    list.addEventListener("click", ()=>{
        console.log(list.id);
        localStorage.setItem("id", JSON.stringify(list.id))
        window.location.href="./gethistory.html"
        
    })
   });


function deletehistory(){
    localStorage.clear();
    maindiv.style.display ="none";
    maindiv.innerHTML=`<p>Search Result Cleared..!!!</p>`
    maindiv.style.display = "block";
    
}