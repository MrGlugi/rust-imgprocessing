const init = async () => {
  let rustApp

  try {
    rustApp = await import('../pkg')
  } catch (error) {
    console.error(error)
    return
  }

  const input = document.getElementById('upload')
  const fileReader = new FileReader()

  fileReader.onloadend = async () => {
    const base64 = fileReader.result.replace('data:', '').replace(/^.+,/, '')
    const img_data_url = rustApp.grayscale(base64)
    document.getElementById('new-img').setAttribute('src', img_data_url)
  }

  input.addEventListener('change', () => {
    fileReader.readAsDataURL(input.files[0])
  })
}

init()
