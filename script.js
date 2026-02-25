var addpopup=document.getElementById("add-popup")
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopup=document.getElementById("add-popup")


addpopup.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
//cancel & add button
var cancelpopup=document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var addbook=document.getElementById("add-book")


//select container,add book button,book title,book aurthor,book description
var container=document.querySelector(".container")

var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("book-title")
var bookaurthor=document.getElementById("book-aurthor")
var bookdecerption=document.getElementById("book-decerption")




addbook.addEventListener("click",function(event){
    event.preventDefault()
    var newdiv=document.createElement("div" )

  

    popupoverlay.style.display="none"
    popupbox.style.display="none"
    newdiv.className="book-container"
    newdiv.innerHTML=` <h2>${booktitle.value}</h2><h3>${bookaurthor.value}</h3><h5>${bookdecerption.value}</h5> <button onclick="deletbook(event)">Delete</button>`
   
    
    container.append(newdiv)

})


function deletbook(event){
    event.target.parentElement.remove()
}






