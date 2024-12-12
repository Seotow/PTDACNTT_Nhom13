const db = require('../config/db');

const getAllCustomers = (callback) => {
    const query = 'SELECT * FROM customers';
    db.query(query, callback);
};

const getCustomerById = (id, callback) => {
    const query = 'SELECT * FROM customers WHERE id = ?';
    db.query(query, [id], callback);
};

const addCustomer = (customer, callback) => {
    
    const query = 'INSERT INTO customers (name, gender, birthdate, phone, email, address) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [customer.name, customer.gender, customer.birthdate, customer.phone, customer.email, customer.address];
    db.query(query, values, callback);
};

const updateCustomer = (id, customer, callback) => {
    const query = 'UPDATE customers SET ? WHERE id = ?';
    db.query(query, [customer, id], callback);
};

const deleteCustomer = (id, callback) => {
    const query = 'DELETE FROM customers WHERE id = ?';
    db.query(query, [id], callback);
};

module.exports = {
    getAllCustomers,
    getCustomerById,
    addCustomer,
    updateCustomer,
    deleteCustomer
};