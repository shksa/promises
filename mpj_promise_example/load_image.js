const Image = 'IMAGE LIBRARY'

const loadImage = (url) => {
  const promise = new Promise((resolve, reject) => {
    const image = new Image()

    image.onload = () => {
      resolve(image)
    }

    image.onerror = () => {
      const message = `Could not load image at ${url}`
      reject(new Error(message))
    }

    image.src = url
  })

  return promise
}

module.exports = loadImage
