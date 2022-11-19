const connection = require('./connection');

const getAllSales = async () => {
  const [result] = await connection.execute(`
    SELECT sale_id,
    product_id,
    quantity,
    date
    FROM sales_products as SP
    INNER JOIN sales as S
    ON SP.sale_id = S.id
    ORDER BY SP.sale_id`);

  return result;
};

const getSalesFromID = async (id) => {
  const [result] = await connection.execute(`
    SELECT product_id, quantity FROM sales_products WHERE sale_id = ?`, [id]);
  return result;
};

const insertSales = async () => {
  const [result] = await connection.execute(
    'INSERT INTO sales (date) VALUES (default)',
  );
  const { insertId } = result;
  return insertId;
};

const registerSales = async (sales) => {
  const saleId = await insertSales();
  const salesRegistered = sales.map(async ({ productId, quantity }) => {
    const [result] = await connection.execute(
    'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [saleId, productId, quantity],
    );
    return result;
  });

  await Promise.all(salesRegistered);

  // if (test.some((item) => !item.affectedRows)) {
  //   return { message: 'Deu treta, bicho' };
  // }

  return {
    id: saleId,
    itemsSold: sales,
  };
};

module.exports = {
  getAllSales,
  getSalesFromID,
  registerSales,
};
