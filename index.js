
function getFirstSelector(selector) {
  return document.querySelector(selector)  //querySelector will give us the first match
}

function nestedTarget() {
  return document.querySelector('#nested .target')   //# stands for div,   . stands for className
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list li')  //set variable for all ranked-list li's

  for(let i = 0; i < lis.length; i++) {                   //iterate thru the variable
    lis[i].innerHTML = parseInt(lis[i].innerHTML)+ n     //set new li innerHTML value to the old value + n
  }                                                     //use parseInt bc value in li is string & you Have
}                                                       //to add n to it

//function deepestChild() {
  //const node = document.getElementById('grand-node')    //set variable for grand node element
  //const div = node.querySelectorAll('div')[3]           //set variable for 4th div in grand node
  //return div                                            //return the div
//}

//or can do
function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}
