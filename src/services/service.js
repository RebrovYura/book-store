import books from '../constants/books.json'
const test = Object.keys(books).map(item => books[item])

class Service {

  getAllBooks = () => {
    let res = []
    for (let i = 0; i < test.length; i++) {
      for (let j = 0; j < test[i].length; j++) {
        res.push(test[i][j])
      }
    }
    return res
  }

  getBook = (genre) => {
    let res = []
    for (let i = 0; i < test.length; i++) {
      for (let j = 0; j < test[i].length; j++) {
        if (test[i][j].category === genre) {
          res.push(test[i][j])
        }
      }
    }
    return res
  }
}

export default Service