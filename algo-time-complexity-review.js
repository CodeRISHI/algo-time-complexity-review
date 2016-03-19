/////////// Prompt 1 ///////////
/////////// time complexity: Linear - O(n) - the algorithm involves iterating through an array; regardless of the size of the input array, the algorithm will take the same number of operations.
function findMax(array){
  var max = -Infinity; //1
  for (var i = 0; i < array.length; i++){ //n
    if (array[i] > max){ //1
      max = array[i]; //1
    }
  }
  return max; //1
}


/////////// Prompt 2 ///////////
/////////// time complexity: Linear - O(n) - indexOf is a linear operation, so no matter how the input array changes, the algorithm will always be proportional to the size of the problem - in this case 'n.'
function contains(array, target){
  return array.indexOf(target) > -1; //n
}


/////////// Prompt 3 ///////////
/////////// time complexity: Linear - 2n --> O(n) - since the slice method is a linear operation and indexOf is also a linear operation, both are O(n) time complexity. However, they are operating in series and so it is only added - n + n - so, the time complexity is 2n, but the coefficient drops off and hence the time complexity of the whole thing is still linear - O(n).
function partialContains(array, target, start){
  return array.slice(start).indexOf(target) > -1; //n + n
}


/////////// Prompt 4 ///////////
/////////// time complexity: Constant - O(1) - the size of the problem is just 3 (i) and since we are not iterating over the array, the time complexity will be constant.
function square(array){
  for (var i = 0; i < 3; i++){ //3 
    array[i] = array[i] * array[i]; //1
  }
  return array; //1
}

/////////// Prompt 5 ///////////
/////////// time complexity: Linear - O(n) - the first for-loop doesn't iterate over any array - it's only 10 elements whereas the 2nd for-loop actually iterates over the array length. The total time complexity for this algorithm is 3n --> which is just O(n) or linear.
function repeat(array){
  var repeat = [];
  for (var j = 0; j < 10; j++){ //1
    repeat[j] = [];
    for (var i = 0; i < array.length; i++){ //n
      repeat[j].push(array[i]); //1
    }
  }
  return repeat; //1
}
//what if we replace 10 with a parameter? 


/////////// Prompt 6 ///////////
/////////// time complexity: Linear - O(n) - the time complexity of this algorithm is linear because there is only one for-loop. All the other statements have Constant time complexity so the overall time complexity is Linear or O(n).
function gcf(num1, num2){ //n is the smaller number of num1 & num2
  if (num1 > num2){ //this ensures num1 is the smaller number //1
    var temp = num1;
    num1 = num2; //1
    num2 = temp; //1
  }
  for (var i = num1; i > 1; i--){ //n
    if (num1 % i === 0 && num2 % i === 0){ //2
      return i; //1
    }
  }
  return 1; //1
}


/////////// Prompt 7 ///////////
/////////// time complexity: Quadratic - O(n^2) - The time complexity for this algorithm is quadratic because there are two for-loops that are nested. Each for-loop has 'n' or linear time complexity and since they are not in series, the time complexity is n x n or O(n^2) which is Quadratic time complexity.
function countChar(string){
  var counts = {};
  var currChar, currCharCount;
  for (var i = 0; i < string.length; i++){ //n
    currChar = string[i]; //1
    currCharCount = 1; //1
    for (var j = i+1; j < string.length; j++){ //n - j
      if (currChar === string[j]){ //1
        currCharCount++; //1
      }
    }
    if (!counts.hasOwnProperty(currChar)){
      counts[currChar] = currCharCount; //1
    }
  }
  return counts; //1
}


/////////// Prompt 8 ///////////
/////////// time complexity: Linear - O(n) - the recursive factorial function has a linear pattern where each operation takes 'n' number of operations to complete. The coefficient doesn't affect it as n gets large so the time complexity is linear or O(n).
var factorial = function(num){
  if (num < 0){ //1
    return; //1
  }
  if (num === 0 || num === 1){ //2
    return 1; //1
  } else {
    return num * factorial(num-1);
  }
}


/////////// Prompt 9 ///////////
/////////// time complexity: Logarithmic - O(log n) - this algorithm is a logarithmic time complexity because for each operation, we are dividing by 3.
function tournament(players){
  var results;
  if (players.length < 3){
    return players[0];
  } else {
    results = hotPotato(players); 
    //assume hotPotato is a function where sets of
    //three players are teleported simultaneously
    //to a room with a potato. at the end of 5 minutes, 
    //the player in each room holding the potato is the winner 
    //and all winners get teleported to the results array 
    return tournament(results);
  }
}



/////////// Prompt 10 ///////////
/////////// time complexity: Exponential - O(c^n) - this algorithm has exponential time complexity because we are using the number of characters in the alphabet (c) while the maximum number of characters in password will be the exponent (n). Hence, the time complexity will be O(c^n) or exponential.
function allPasswords(allowedChars, maxLength){
  var results = [];

  function findPassword(currentAttempt){
    if (currentAttempt.length > 0){ //1
      results.push(currentAttempt.join("")); //1
    }
    if (currentAttempt.length <= maxLength){ //1
      for (var i = 0; i < allowedChars.length; i++){ //n
        findPassword(currentAttempt.concat(allowedChars[i]));
      }
    }
  }

  findPassword([]);
  return results;
}


/////////// Prompt 11 ///////////
/////////// time complexity: Logarithmic - O(log n) - the time complexity will be logarithmic because each time, we are dividing by 4 - so it is log-base 4. 
function findColor(quadTree, coordinates){
  //a quad tree is a tree where each node has 4 children 
  //or no children, usually used to divide a two-dimensional
  //space into coordinates
  //coordinates is an array [xpos, ypos]

  if (!Array.isArray(quadTree.color)){
    return quadTree.color;
  } else {
    var quadrant = findQuadrant(quadTree, coordinates); 
    if (quadrant === "NE") {
      return findColor(quadTree.color[0], coordinates);
    } 
    if (quadrant === "SE") {
      return findColor(quadTree.color[1], coordinates);
    }
    if (quadrant === "SW") {
      return findColor(quadTree.color[2], coordinates);
    } 
    if (quadrant === "NW") {
      return findColor(quadTree.color[3], coordinates);
    }
  }

  function findQuadrant(quadTree, coordinates){
    var y = (quadTree.coordinates.top + quadTree.coordinates.bottom)/2;
    var x = (quadTree.coordinates.left + quadTree.coordinates.right)/2;
    if (coordinates[0] > x){
      if (coordinates[1] > y){
        return "NE";
      } else {
        return "SE";
      }
    } else {
      if (coordinates[1] > y){
        return "NW";
      } else {
        return "SW";
      }
    }
  }
}



/////////// Bonus! ///////////
/////////// time complexity: Logarithmic - O(log n) - this algorithm will also be logarithmic since each time, we are dividing by 3 to test which player has the potato. So it will be log-base 3 of n - or logarithmic time complexity.
//this will require some math to determine 

function tournamentRedux(players){
  var results;
  if (players.length < 3){ //1
    return players[0]; //1
  } else {
    for (i = 0; i < players.length; i = i + 3){ //n
      results.push(hotPotato([players[i], players[i+1], players[i+2]])); //n
      //assume hotPotato is a function where 
      //the three players at a time must play hot potato for 5 minutes. 
      //the player in the room holding the potato is the winner
      //and gets returned from the function 
    }
    return tournament(results);
  }
}







