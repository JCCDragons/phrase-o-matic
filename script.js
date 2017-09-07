function generate() {
  // word lists
  var nounList = ["cat", "dog", "trombone", "apple", "duck", "robot", "solar flare", "dodecahedron", "diatom", "sausage"];
  var verbList = ["ran on", "ninja-kicked", "karate-chopped", "];
  var nounList2 = ["tree", "fence", "book", "concrete", "table"];
  
  // calculates how long each word list is
  var noun = nounList.length;
  var verb = verbList.length;
  var noun2 = nounList2.length;
  
  // the sentence to print out
  var stringy = "The " + noun + " " + verb + " the " + noun2 + "."
  
  // sets the inner HTML of the quote box to the sentence just created
  document.getElementById("quotebox").innerHTML = "Hi!"
}
