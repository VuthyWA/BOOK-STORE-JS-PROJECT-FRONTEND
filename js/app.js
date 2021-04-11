// -----------------all Buttons

let inputArea = document.querySelector(".InputArea")
let formcontainer = document.querySelector(".formcontainer")
let createBtn = document.querySelector("#createBtn")
let addBtn = document.querySelector("#addBtn")
let cancelBtn = document.querySelector("#cancelBtn")
let updateBtn = document.querySelector("#updateBtn")
let bynameBtn = document.querySelector("#byname")
let bycategoryBtn = document.querySelector("#bycategory")
// --------------------collect all input values
let booktitle = document.querySelector("#book")
let authorvalue = document.querySelector("#author")
let BookDescription = document.querySelector("#bookdescription")
let pricevalue = document.querySelector('#price')
let published_datevalue = document.querySelector("#published_date");
let purchase_datevalue =document.querySelector("#purchase_date");
let color_major =  document.querySelector(".major .color_major")
let category =  document.getElementById("category")
let check_date = document.querySelector(".check_date")

// ---------------variable index
let index =0
// -------------------------USE add button:
addBtn.addEventListener("click",function(){
  formcontainer.style.display="flex"
  createBtn.style.display="block";
  addBtn.style.display="none"
})
// ----------------major color
let color = ""
category.addEventListener("click",function(){
  let categoryIndex = document.getElementById("category").selectedIndex;
  let major = document.querySelectorAll("option")[categoryIndex].value;
  let major_color = document.querySelector(".color_major")
  if (major ==='IT'){
    color="yellow"
    major_color.style.background=color
  }else if(major==="English"){
    color="red"
    major_color.style.background=color
  }else if(major==="Funny"){
    color="blue"
    major_color.style.background=color
  }
})
// ----------------------USE Cancel Button
cancelBtn.addEventListener("click",function(){
  formcontainer.style.display = "none"
  createBtn.style.display = "none"
  addBtn.style.display="block"
  updateBtn.style.display="none"
  // -------------convert input to empty after add book
  booktitle.value=""
  authorvalue.value=""
  BookDescription.value=""
  pricevalue.value=""
  published_datevalue.value=""
  purchase_datevalue.value=""
})
// ------------------------------book type
let ITbooks = document.querySelector(".ITbook")
let Englishbooks = document.querySelector(".Englishbook")
let Funnybooks = document.querySelector(".Funnybook")
// ------------------create new book in result
let librarycontainer = document.querySelector(".librarycontainer")
// --------------------Use Create btn:
createBtn.addEventListener("click",function(){
  // -----------main container
  let main_data = document.createElement("div")
  main_data.className="main_data"
  descriptin=BookDescription.value
  let data = document.createElement("div")
  data.className="data"
  // --------------top info
  let top_info = document.createElement("div")
  top_info.className="top_info"
  //---------------color area
  let color_area= document.createElement("div")
  color_area.className="color_area"
  color_area.style.background=color
  //------------------book title
  let book = document.createElement("span")
  book.setAttribute("id" , 'bookName')
  book.textContent= booktitle.value
  //------------author
  let author = document.createElement("span")
  author.textContent= authorvalue.value
  //----------price
  let price = document.createElement("span")
  price.setAttribute("id" , "bookprice")
  price.textContent=pricevalue.value
  //--------------dollar symbol
  let dollar_symbol = document.createElement("span")
  dollar_symbol.textContent="$"
  // ------------appendChild to top_info
  top_info.appendChild(color_area)
  top_info.appendChild(book)
  top_info.appendChild(author)
  top_info.appendChild(price)
  top_info.appendChild(dollar_symbol)
  // ------------appendChild to data
  data.appendChild(top_info)
  // -----------------class-icon
  let classicon = document.createElement("div")
  classicon.className="icon"
  let editBtn = document.createElement("span")
  editBtn.className="fa fa-edit"
  let deleteBtn = document.createElement("span")
  deleteBtn.className="fa fa-close"
  classicon.appendChild(editBtn);
  classicon.appendChild(deleteBtn);
  data.appendChild(classicon)
  main_data.appendChild(data)
  // --------------date
  let date = document.createElement("div")
  date.className="date"
  let published_date = document.createElement("span")
  published_date.textContent= published_datevalue.value
  let purchase_date = document.createElement("span")
  purchase_date.textContent=purchase_datevalue.value
  date.appendChild(published_date)
  date.appendChild(purchase_date)
  main_data.appendChild(date)
  // -------------------book description alert
  let book_description= document.createElement("div")
  book_description.className="description"
  book_description.textContent=BookDescription.value; 
  main_data.appendChild(book_description)
  if (published_datevalue.value>purchase_datevalue.value){
    check_date.style.display="block"
  }else{
    if (book.textContent !="" && author.textContent !="" && book_description.textContent!="" && price.textContent !="$" && color !="" && published_date.textContent !='' && purchase_date.textContent !=""){
      if(color==="yellow"){
        ITbooks.appendChild(main_data)
      }
      if (color==="red"){
        Englishbooks.appendChild(main_data)
      }
      if(color==="blue"){
        Funnybooks.appendChild(main_data)
      }
      // -------------convert input to empty after add book
      booktitle.value=""
      authorvalue.value=""
      BookDescription.value=""
      pricevalue.value=""
      published_datevalue.value=""
      purchase_datevalue.value=""
      color=""
    check_date.style.display='none'
    }else{
      alert("You need you fill all of gaps")
    }
    for(let type of Typesofbook){
      if(type.children.length>1){
        book_content[index].style.display="block"
      }
      index++
    }index=0
  }
  for( content of book_content){
    content.style.display="none"
  }
  // -----------------------hower description
  let AllMainData = document.querySelectorAll('.main_data')
  for (main of AllMainData){
    main.addEventListener("mouseover",function(event){
      // ----------------------lsdkfjklsdfjlskdfj
    })
  }
  
});
//-----------------------delete book and edit book information
let relativeOfBook = document.querySelector(".librarycontainer")
relativeOfBook.addEventListener("click",function(event){
  let getBtn= event.target.className;
  if(getBtn==="fa fa-close"){
    let parent=event.target.parentElement.parentElement.parentElement;
    parent.remove();
  }
})
// -----------------------get all book content
let book_content = document.querySelectorAll(".content")
//------------------ show books by name 

bynameBtn.addEventListener("click",function(){
  librarycontainer.style.flexDirection="column"
  for(let content of book_content){
      content.style.display="none"
  }
  
})
//-------------------show books by category
let Typesofbook = document.querySelectorAll(".Englishbook,.Funnybook,.ITbook")
bycategoryBtn.addEventListener("click",function(){
  librarycontainer.style.flexDirection="row"
  for(let type of Typesofbook){
    if(type.children.length>1){
      book_content[index].style.display="block"
    }
    index++
  }index=0
  

})
//------------------------search booktitle:

let searchBar = document.querySelector("#search")
searchBar.addEventListener('keyup',function(){
  let bookNames = document.querySelectorAll("#bookName");
  let main_data = document.querySelectorAll(".main_data")
  let searchText = searchBar.value.toLowerCase();
  let ind =0
  
  for (book_text of bookNames){
    let title = book_text.textContent.toLowerCase();
    if(title.indexOf(searchText)=== -1){
      main_data[ind].style.display="none"
    }else{
      main_data[ind].style.display="block"
    }
    ind++
  }
})
//---------------------------filter item (search min price and max price)
let minPriceField = document.querySelector("#minprice")
let maxPriceField = document.querySelector('#maxprice')
let IsMin=false
let IsMax=false

//----------------search min price and max price
minPriceField.addEventListener("keyup",function(){
  let number = 0
  let AllMainData = document.querySelectorAll(".main_data")
  let AllPrice = document.querySelectorAll("#bookprice")
  for (let bookPrice of AllPrice){
    let price =parseInt(bookPrice.textContent)
    if (minPriceField.value<=price){
      IsMin=true
    }else{
      IsMin=false
    }if(IsMin && IsMin){
      AllMainData[number].style.display="flex"
    }else{
      AllMainData[number].style.display="none"
    }number++
  }
})
maxPriceField.addEventListener('keyup',function(){
  let number = 0
  let AllMainData = document.querySelectorAll(".main_data")
  let AllPrice = document.querySelectorAll("#bookprice")
  for (let bookPrice of AllPrice){
    let price =parseInt(bookPrice.textContent)
    if (price<=maxPriceField.value){
     IsMax=true
    }else{
      IsMax=false
    }
    if(IsMin && IsMax){
      AllMainData[number].style.display="flex"
    }else{
      AllMainData[number].style.display="none"
    }number++
  }
})
