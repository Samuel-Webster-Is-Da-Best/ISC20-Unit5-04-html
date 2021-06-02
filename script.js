document.getElementById('sp').addEventListener('click', swappic)
document.getElementById('st').addEventListener('click', swaptext)
document.getElementById('dt').addEventListener('click', distext)
document.getElementById('bc').addEventListener('click', backcolor)

function swappic () {
  document.getElementById('image').src='./images/simp.jpg'
}

function swaptext () {
  const text = document.getElementById('para')
  text.innerHTML = 'Cake or pie? I can tell a lot about you by which one you pick. It may seem silly, but cake people and pie people are really different. I know which one I hope you are, but that\'s not for me to decide. So, what is it? Cake or pie?' 
}

function distext () {
  document.getElementById('para').style.display='none'
}

function backcolor () {
  document.body.style.background = 'blue'
}
