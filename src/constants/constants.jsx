import service from "../services/service"

const jsonService = new service()

export const genresList = [
    { name: 'Бизнес-книги', amount: jsonService.getBook('businessLiterature').length, category: jsonService.getBook('businessLiterature').map(item => item.category) },
    { name: 'Детективы', amount: jsonService.getBook('detectiveLiterature').length, category: jsonService.getBook('detectiveLiterature').map(item => item.category) },
    { name: 'Детские книги', amount: jsonService.getBook('childrenLiterature').length, category: jsonService.getBook('childrenLiterature').map(item => item.category) },
    { name: 'Зарубежная литература', amount: jsonService.getBook('foreignLiterature').length, category: jsonService.getBook('foreignLiterature').map(item => item.category) },
    { name: 'История', amount: jsonService.getBook('historyLiterature').length, category: jsonService.getBook('historyLiterature').map(item => item.category) },
    { name: 'Классическая литература', amount: jsonService.getBook('classicLiterature').length, category: jsonService.getBook('classicLiterature').map(item => item.category) },
    { name: 'Книги по психологии', amount: jsonService.getBook('psychologyLiterature').length, category: jsonService.getBook('psychologyLiterature').map(item => item.category) },
    { name: 'Компьютерная литература', amount: jsonService.getBook('computerLiterature').length, category: jsonService.getBook('computerLiterature').map(item => item.category) },
    { name: 'Культура и искусство', amount: jsonService.getBook('cultureLiterature').length, category: jsonService.getBook('cultureLiterature').map(item => item.category) },
    { name: 'Наука и образование', amount: jsonService.getBook('scienceLiterature').length, category: jsonService.getBook('scienceLiterature').map(item => item.category) },
    { name: 'Публицистическая литература', amount: jsonService.getBook('journalisticLiterature').length, category: jsonService.getBook('journalisticLiterature').map(item => item.category) },
    { name: 'Справочники', amount: jsonService.getBook('directoryLiterature').length, category: jsonService.getBook('directoryLiterature').map(item => item.category) },
    { name: 'Фантастика', amount: jsonService.getBook('fantasticLiterature').length, category: jsonService.getBook('fantasticLiterature').map(item => item.category) },
    { name: 'Юмористическая литература', amount: jsonService.getBook('humorousLiterature').length, category: jsonService.getBook('humorousLiterature').map(item => item.category) },
]

// ,
//   "foreignLiterature": [],
//   "historyLiterature": [],
//   "classicLiterature": [],
//   "psychologyLiterature": [],
//   "computerLiterature": [],
//   "cultureLiterature": [],
//   "scienceLiterature": [],
//   "journalisticLiterature": [],
//   "directoryLiterature": [],
//   "fantasticLiterature": [],
//   "humorousLiterature": []