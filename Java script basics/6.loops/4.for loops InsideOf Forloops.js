var myPlaces = [1, 2, 3];
var friendPlaces = [1, 2, 3];

for (var i = 0; i < myPlaces.length; i++) {
    console.log(myPlaces[i]);
  
  for (var j = 0; j < friendPlaces.length; j++) {
        console.log(friendPlaces[j]);
    
    if (myPlaces[i] === friendPlaces[j]) {
    			console.log('Match: ' + myPlaces[i]);
				}
    }
}