function getFirstSelector (selector) {
  return document.querySelector(selector)
}

//can also do
//function getFirstSelector (selector) {
  //return document.querySelector(`${selector}`)
//}

function nestedTarget () {
  return document.querySelector('#nested .target')  //# for id & . for class
}

function increaseRankBy (n) {
  const lis = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
    }
}

function deepestChild () {
  const node = document.querySelector('#grand-node')
  const div = node.querySelectorAll('div')[3]
  return div
}

//can also do
//function deepestChild () {
//let node = document.getElementById('grand-node')
//let nextNode = node.children[0]

//while (nextNode) {
//node = nextNode
//nextNode = node.children[0]
//}
//return node
//}
