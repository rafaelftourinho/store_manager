const mockAllProducts = [[
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
], null]

const mockProducts = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
]

const mockOneProduct = {
  id: 1,
    name: 'Martelo de Thor',
}

const mockInsertDb = [
  {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 4,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0
  },
  null
];

const newObject = {
  "id": 4,
  "name": 'Gungnir'
}

module.exports = {
  mockAllProducts,
  mockProducts,
  mockOneProduct,
  mockInsertDb,
  newObject,
};
