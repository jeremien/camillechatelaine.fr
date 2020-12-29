

window.addEventListener('DOMContentLoaded', (e) => {
  const content = document.getElementById('content')
  const links = content.getElementsByTagName('a')
  const images = content.getElementsByTagName('img')

  function main() {
    removeTop()
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', () => {
        changeImage(i, links[i].title)
        console.log(links[i])
      }, false)
    }
  }

  function changeImage (num, titre) {
    if (titre === images[num].title){
      console.log(images[num])
      images[num].setAttribute('class', 'image top') 
    } else {
      console.log('no match')
      images[num].setAttribute('class', 'image') 
    }
  }

  // function removeExt (title) {
  //   const str = title.replace(/.jpg/gi, '')
  //   return str
  // }

  function removeTop () {
    for (let i = 0; i < images.length; i++) {
      images[i].setAttribute('class', 'image')
      // if (i !== num) {
      //   images[i].setAttribute('class', 'image')
      // }
    }
  }

  main()

})