import books from '../constants/books.json'

class Service {
    
    
    getAllBooks = () => {
        const test = Object.keys(books).map(item => books[item])
        let res = []
        for (let i = 0; i < test.length; i++) {
            for (let j = 0; j < test[i].length; j++) {
                res.push(test[i][j])
            }
        }
        return res
    }
}

export default Service