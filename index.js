// Your code here

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.match(/\d*/)
  let leftInt = parseInt(leftNumbers)

  if (leftInt > 0) {
    dodger.style.left = `${leftInt - 1}px`
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.match(/\d*/)
  let leftInt = parseInt(leftNumbers)

  if (leftInt < 360) {
    dodger.style.left = `${leftInt + 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  }
})


document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight()
  }
})