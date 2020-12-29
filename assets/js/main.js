

const content = document.getElementById('content')
const links = content.getElementsByTagName('a')
const images = content.getElementsByTagName('img')

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    changeImage(i, links[i].title)
    console.log(links[i].title)
    removeTop(i)
  }, false)
}


function changeImage (num, titre) {
  if (titre === removeExt(images[num].title)){
    images[num].setAttribute('class', 'image top') 
  } else {
    console.log('no match')
  }
}

function removeExt (title) {
  const str = title.replace(/.jpg/gi, '')
  return str
}

function removeTop (num) {
  for (let i = 0; i < images.length; i++) {
    if (i !== num) {
      images[i].setAttribute('class', 'image')
    }
  }
}
