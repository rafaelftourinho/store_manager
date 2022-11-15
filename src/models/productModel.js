const connection = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM products');
  return result;
};

const getProductFromID = async (id) => {
  const [[result]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return result;
};

const insertProduct = async (product) => {
  const [{ insertId }] = await connection.execute('INSERT INTO products (name) VALUES (?)',
    [product]);
  const result = await getProductFromID(insertId);
  return result;
};

module.exports = {
  getAllProducts,
  getProductFromID,
  insertProduct,
};
