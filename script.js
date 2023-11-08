let stolenItems = [ {
    socks: 7,//0
    spoons: 20,
    nutella_jar: 5,
    keys: 0,
    shoelaces: 4,
    rotisserie_chicken: 1
  },
  {
    socks: 2,//1
    spoons: 2,
    nutella_jar: 0,
    keys: 0,
    shoelaces: 4, 
    rotisserie_chicken: 2
  },
  {
    socks: 0,//2
    spoons: 0,
    nutella_jar: 0,
    keys: 0,
    shoelaces: 0,
    rotisserie_chicken: 0
  },
  {
    socks: 2,//3
    spoons: 10,
    nutella_jar: 4,
    keys: 4,
    shoelaces: 12,
    rotisserie_chicken: 0
  }, 
  {
    socks: 12,//4
    spoons: 17,
    nutella_jar: 0,
    keys: 2,
    shoelaces: 0,
    rotisserie_chicken: 0
  },
  {
    socks: 0,//5
    spoons: 0,
    nutella_jar: 2,
    keys: 0,
    shoelaces: 0,
    rotisserie_chicken: 0
  }, 
  {
    socks: 2,//6
    spoons: 2,
    nutella_jar: 0,
    keys: 4,
    shoelaces: 1,
    rotisserie_chicken: 0
  }, 
  {
    socks: 43,//7
    spoons: 10,
    nutella_jar: 50,
    keys: 2,
    shoelaces: 0,
    rotisserie_chicken: 0
  }, 
  {
    socks: 0,//8
    spoons: 2,
    nutella_jar: 0,
    keys: 3,
    shoelaces: 0,
    rotisserie_chicken: 0
  }, 
  {
    socks: 0,//9
    spoons: 0,
    nutella_jar: 0,
    keys: 0,
    shoelaces: 14,
    rotisserie_chicken: 0
  }
  ]
  
  // PROBLEM ONE
  // Given an object of the stolen items for a household, return the total amount of items stolen (number). If nothing was robbed, return the string "Lucky you!".
  
  function houseTotal(obj) {
  var houseTotal = 0;
  
  
  for (var i = 0; i < stolenItems.length; i++) {
    for (const houseTotal of stolenItems[i]){
    if (stolenItems[i].socks >= 1) { houseTotal == houseTotal + stolenItems[i].socks } 
    else if (stolenItems.socks == 0) { console.log( "Lucky you!") }
  
    if (stolenItems[i].spoons >= 1) { houseTotal == houseTotal + stolenItems[i].spoons } 
    else if (stolenItems.spoons == 0) { console.log( "Lucky you!") }
    
    if (stolenItems[i].nutella_jar >= 1) { houseTotal == houseTotal + stolenItems[i].nutella_jar } 
    else if (stolenItems.nutella_jar == 0) { console.log( "Lucky you!")}  
    
    if (stolenItems[i].keys >= 1) { houseTotal == houseTotal + stolenItems[i].keys } 
    else if (stolenItems.keys == 0) { console.log( "Lucky you!") }  
    
    if (stolenItems[i].shoelaces >= 1) { houseTotal == houseTotal + stolenItems[i].shoelaces } 
    else if (stolenItems.shoelaces == 0) {console.log( "Lucky you!")}  
    
    if (stolenItems[i].rotisserie_chicken >= 1) { houseTotal == houseTotal + stolenItems[i].rotisserie_chicken } 
    else if (stolenItems.rotisserie_chicken == 0) {console.log( "Lucky you!")}  
  }
  }
  }
  
  
  // uncomment these out to test it out
  console.log(houseTotal(stolenItems[0])); 
  console.log(houseTotal(stolenItems[1]));
  console.log(houseTotal(stolenItems[2])); 
  
  // PROBLEM TWO
  // Given an object of the stolen items for a household and a string in lowercase representing a specific item, return true if that item was stolen and false if it was not. 
  
  function isStolen(obj, item) {
    
  var lowestsocks = stolenItems[0].socks;
  for (var i = 0; i < stolenItems.length; i++) {
  if (stolenItems.socks < lowestsocks) {
  lowestsocks = stolenItems.socks;
  }
  }
  var highestsocks = stolenItems[0].socks;
  for (var i = 0; i < stolenItems.length; i++) {
  if (stolenItems.socks > highestsocks) {
  highestsocks = stolenItems.socks;
  }
  }
    
  var lowestspoons = stolenItems[0].spoons;
  for (var i = 0; i < stolenItems.length; i++) {
  if (stolenItems.spoons < lowestspoons) {
  lowestspoons = stolenItems.spoons;
  }
  }
  var highestspoons = stolenItems[0].spoons;
  for (var i = 0; i < stolenItems.length; i++) {
  if (stolenItems.spoons > highestspoons) {
  highestspoons = stolenItems.spoons;
  }
  }
    
    var lowestnutella_jar = stolenItems[0].nutella_jar;
  for (var i = 0; i < stolenItems.length; i++) {
  if (stolenItems.nutella_jar < lowestnutella_jar) {
  lowestnutella_jar = stolenItems.nutella_jar;
  }
  }
  var highestnutella_jar = stolenItems[0].nutella_jar;
  for (var i = 0; i < stolenItems.length; i++) {
  if (stolenItems.nutella_jar > highestnutella_jar) {
  highestnutella_jar = stolenItems.nutella_jar;
  }
  }
    
  var lowestkeys = stolenItems[0].keys;
  for (var i = 0; i < stolenItems.length; i++) {
  if (stolenItems.keys < lowestkeys) {
  lowestkeys = stolenItems.keys;
  }
  }
  var highestkeys = stolenItems[0].keys;
  for (var i = 0; i < stolenItems.length; i++) {
  if (stolenItems.keys > highestkeys) {
  highestkeys = stolenItems.keys;
  }
  }
  
  var lowestshoelaces = stolenItems[0].shoelaces;
  for (var i = 0; i < stolenItems.length; i++) {
  if (stolenItems.shoelaces < lowestshoelaces) {
  lowestshoelaces = stolenItems.shoelaces;
  }
  }
  var highestshoelaces = stolenItems[0].shoelaces;
  for (var i = 0; i < stolenItems.length; i++) {
  if (stolenItems.shoelaces > highestshoelaces) {
  highestshoelaces = stolenItems.shoelaces;
  }
  }
    
  var lowestrotisserie_chicken = stolenItems[0].rotisserie_chicken;
  for (var i = 0; i < stolenItems.length; i++) {
  if (stolenItems.rotisserie_chicken < lowestrotisserie_chicken) {
  lowestrotisserie_chicken = stolenItems.rotisserie_chicken;
  }
  }
  var highestrotisserie_chicken = stolenItems[0].rotisserie_chicken;
  for (var i = 0; i < stolenItems.length; i++) {
  if (stolenItems.rotisserie_chicken > highestrotisserie_chicken) {
  highestrotisserie_chicken = stolenItems.rotisserie_chicken;
  }
  }
  }
  
  console.log(houseTotal(stolenItems[0], "keys")); 
  console.log(houseTotal(stolenItems[1], "socks"));
  console.log(houseTotal(stolenItems[2], "spoons")); 
  
  
  // PROBLEM THREE
  // Given an array of objects representing an entire neighborhood, return the most frequently stolen item. This is NOT the item that has been stolen from the most households, this is the item that has been stolen the most times TOTAL. 
  
  function neighborhoodTotal(arr) {
  
  stolenItems.sum("socks") == socks
  stolenItems.sum("spoons") == spoons
  stolenItems.sum("nutella_jar") == nutella_jar  
  stolenItems.sum("keys") == keys  
  stolenItems.sum("shoelaces") == shoelaces  
  stolenItems.sum("rotisserie_chicken") == rotisserie_chicken
    
  if (stolenItems.sum("") >= 50){
    total = stolenItems.sum("")
  }    
    return total; 
  }
  
  console.log(houseTotal(stolenItems));  
  
  
  
  
  // PROBLEM FOUR
  // Based on the item that has been stolen the most, who do you think the burglar is? (you won’t get marked down for getting the "wrong" answer - just give me a fun explanation for why you think it is who it is! 
  
  console.log("The segal and cat worked together to steal a bunch of spoons, socks, and shoelaces. As the segal likes shiny things and the cat wanted to chew on them without destroying his poor owners clothes.");
  
  