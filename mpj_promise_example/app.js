loadImage = require('./load_image')

const addImg = (src) => {
  const imgElement =
    document.createElement('img')
  imgElement.src = src
  document.body.appendChild(imgElement)
}

Promise.all([
  loadImage('images/cat1.jpg'),
  loadImage('images/cat2.jpg'),
  loadImage('images/cat3.jpg'),
  loadImage('images/cat4.jpg'),
]).then((images) => {
  images.forEach(img => addImg(img.src))
}).catch((error) => {
  // handle error later
})
