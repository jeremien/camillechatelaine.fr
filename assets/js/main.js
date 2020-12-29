

window.addEventListener('DOMContentLoaded', (e) => {
  const images = e.target.images
  const links = e.target.links

  const main = () => {
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', () => {
        let title = links[i].title
        for (let j = 0; j < images.length; j++) {
          images[j].setAttribute('class', 'image') 
          if (images[j].title === title) {
            images[j].setAttribute('class', 'image top') 
          }
        }
      }, false)
    }
  }

  main()

})