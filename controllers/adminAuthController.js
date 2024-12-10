const adminModel = require('../models/adminModel');

const showAdminLoginForm = (req, res) => {
    if (!req.session.admin) {
        return res.render('admin/index'); 
    }
    res.redirect('/dashboard'); 
};

const login = (req, res) => {
    const { email, password } = req.body;

    adminModel.getAdminByEmailAndPassword(email, password, (err, admin) => {
        if (err) {
            req.session.message = { type: "error", text: "Đã xảy ra lỗi, vui lòng thử lại sau"};
            return res.status(500).send('Đã xảy ra lỗi');
        }
        if (!admin) {
            req.session.message = { type: "error", text: "Tài khoản hoặc mật khẩu không chính xác"};
            res.redirect('/');
        } else {
            // Lưu thông tin admin vào session
            req.session.admin = { id: admin.id, name: admin.name, level: admin.level };
            res.redirect('/dashboard');    
        }
    });
}

const logout = (req, res) => {
    delete req.session.admin
    res.redirect('/')
}

module.exports = {
    showAdminLoginForm,
    login,
    logout
}