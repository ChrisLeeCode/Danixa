


var toAdd = document.createDocumentFragment();

$.getJSON("data.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});

for(var i=0; i < 11; i++){
   var newDiv = document.createElement('div');
   newDiv.id = 'r'+i;
   if (i % 2 == 0) {
   	newDiv.className = 'container';
   	newDiv.innerHTML += 'Extra stuff' + i;
   } else{
   	newDiv.className = 'container darker';
   	newDiv.innerHTML += 'Extra stuff' + i;

   }
   
   toAdd.appendChild(newDiv);
}

document.getElementById('globalCont').appendChild(toAdd);