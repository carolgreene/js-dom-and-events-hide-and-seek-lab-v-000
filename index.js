
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list li')

  for(let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML)+ n
  }
}

function deepestChild() {
  const node = document.getElementById('grand-node')
  const div = node.querySelectorAll('div')[3]
  return div
}
