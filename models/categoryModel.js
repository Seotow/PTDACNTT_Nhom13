const db = require('../config/db'); 

// Hàm lấy danh sách tất cả thể loại từ database
const getAllCategories = (callback) => {
    const sql = 'SELECT * FROM categories ORDER BY categories.id DESC';
    db.query(sql, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};


// Hàm thêm thể loại mới vào database
const addCategory = ({ name }, callback) => {
    const sql = 
    `INSERT INTO categories (name) 
    VALUES (?)`;

    db.query(sql, [name], (err) => {
        if (err) {
            return callback(err);
        }
        callback(null);
    });
};

// Hàm lấy thông tin thể loại theo ID
const getCategoryById = (id, callback) => {
    const sql = `SELECT * FROM categories WHERE id = ?`;

    db.query(sql, [id], (err, results) => {
        if (err) return callback(err);
        
        callback(null, results[0]);
    });
};

// Hàm cập nhật thông tin thể loại
const updateCategory = (id, { name }, callback) => {
    const sql = 
    `UPDATE categories
    SET name = ?
    WHERE id = ?`;

    db.query(sql, [name, id], (err) => {
        if (err) return callback(err);
        callback(null);
    });
};

// Hàm xóa thể loại theo ID
const deleteCategory = (id, callback) => {
    const sql = `DELETE FROM categories WHERE id = ?`;

    db.query(sql, [id], (err) => {
        if (err) return callback(err);
        callback(null);
    });
};

module.exports = {
    getAllCategories,
    addCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
};
