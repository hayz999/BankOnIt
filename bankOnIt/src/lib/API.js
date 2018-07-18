const url = 'https://bankonit.herokuapp.com/complaints'

export default {

  getAllData() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data[0])
    })
  }
}