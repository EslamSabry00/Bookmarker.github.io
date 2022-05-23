nameInput = document.getElementById("bookmarkName");
urlInput = document.getElementById("bookmarkURL");
/* create array container */
if(localStorage.getItem("allBookmarks") == null){
    var bookmarkList =[];
  }else{
    var bookmarkList = JSON.parse(localStorage.getItem("allBookmarks"));
    displayBookmark()
}

/* display items */
function displayBookmark() {
    var divs="";

    for(var i=0; i<bookmarkList.length; i++){
        divs +=`
        <div id="bookmarkItem" class="p-30 row rounded">
      <h3 class="w-75 fw-bold m-2">${bookmarkList[i].bName}</h3>
      <a class="btn btn-primary w-fit m-2" href="${bookmarkList[i].URL}" target="_blank">Visit</a>
      <button class="btn btn-danger w-fit m-2" onclick="deleteBookmark(${i})" >Delete</button>
    </div>
        `
    }
    document.getElementById("bookmarkItems").innerHTML =divs;
}
/* ADD BOOKMARK */
function addBookmark() {
    var bookmarkItem={
        bName: nameInput.value,
        URL: urlInput.value
    };
    bookmarkList.push(bookmarkItem);
    displayBookmark()
    var x= JSON.stringify(bookmarkList);
    localStorage.setItem("allBookmarks",x);
    clearForm()
}
/* DELETE BOOKMARK */
function deleteBookmark(index){
    bookmarkList.splice(index,1);
    displayBookmark();
    var x=JSON.stringify(bookmarkList);
    localStorage.setItem("allBookmarks",x);
}
/* clear form */
function clearForm() {
    nameInput.value ="";
    urlInput.value ="";
}



