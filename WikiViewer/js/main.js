const rando = document.getElementById('random');

rando.onclick = function rand () {
  window.open('https://en.wikipedia.org/wiki/Special:Random');
}

const searchy = document.getElementById('search');
const title = document.getElementById('sresults');
let input = document.getElementById('input');
let outputLoc = document.getElementById('searchResults');
let link = "";

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    searchy.click();
  }
});

searchy.onclick = function search () {
  title.innerHTML = "Search Results";
  link = "https://en.wikipedia.org/w/api.php?format=json&action=opensearch&origin=*&limit=9&search=" + input.value;
  goSearch(link);
}

function goSearch(link) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);
          let output = "";
          for (let i = 0, j = 1; i < 9; i++) {
            output += "<div class='col-md-4 searchbox'><a href=" + myObj[3][i] + " alt='" + myObj[1][i] + "' target='_blank'><h5>" + myObj[1][i] + "</h5><p>" + myObj[2][i] + "</p></a></div>"
            outputLoc.innerHTML =  output;
            console.log(output);
          }
    }
  };
  xmlhttp.open("GET", link, true);
  xmlhttp.send();
}


         /*
         //alert('you are searching for something NEO' + input.value);
           console.log(myObj[1][0]);
          console.log(myObj[2][0]);
          console.log(myObj[3][0]);

         //new link = "https://en.wikipedia.org/w/api.php?format=json&action=opensearch&origin=*&limit=9&search="
// link = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrlimit=9&prop=extracts&explaintext=true&exsentences=1&exintro=true&origin=*&gsrsearch=" + input.value;


           <div class="col-md-4 searchbox" id="box1">
                <a href=#><p>' + extractArray[i][0] + '</p><p>' + 
            extractArray[i][1] + '</p></a>'
              </div>

          //console.log(this.responseText);
          let pageArray = [];
          let extractArray = [];
          let index = 0;

          const length = 9;
          for (let key in myObj.query.pages) {
            if (myObj.query.pages.hasOwnProperty(key)) {
              pageArray[index] = key;
              index++;
            }
          }

          //console.log(pageArray);

          for (let i in pageArray){
            extractArray[i] = [myObj.query.pages[pageArray[i]]["title"], 
            myObj.query.pages[pageArray[i]]["extract"]];
          }

          //console.log(extractArray);

          for (let i in extractArray) {
            document.getElementById("onlyone").innerHTML = '<a href=#><p>' + extractArray[i][0] + '</p><p>' + 
            extractArray[i][1] + '</p></a>';
  //<a href="https://placeholder.com"></a>


            console.log ("---------------------------------")
            console.log ("Title: " + extractArray[i][0]);
            console.log ("Details: " + extractArray[i][1]);

          } 




          // Get the input field
var input = document.getElementById("myInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});*/

        
