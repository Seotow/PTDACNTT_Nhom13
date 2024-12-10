# Apple Store Management System

**Đề tài môn Phát triển dự án công nghệ thông tin**  
**Hệ thống quản lý cửa hàng bán điện thoại Apple Store**  

[![Node.js](https://img.shields.io/badge/Node.js-v18.x-brightgreen)](https://nodejs.org/)  
[![MySQL](https://img.shields.io/badge/MySQL-v8.x-blue)](https://www.mysql.com/)  
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)  

## 🚀 Giới thiệu

Hệ thống quản lý cửa hàng Apple Store giúp tối ưu hóa các quy trình quản lý như kiểm kê hàng hóa, theo dõi doanh thu, quản lý nhân viên, và khách hàng. Dự án được xây dựng với các công nghệ hiện đại, giao diện thân thiện và bảo mật cao.

## 🛠 Công nghệ sử dụng

- **Frontend**: HTML, CSS, JavaScript (thuần)
- **Backend**: Node.js với Express.js
- **Database**: MySQL (quản lý thông qua PHPMyAdmin và Laragon)
- **Template Engine**: EJS
- **Công cụ hỗ trợ**: Visual Studio Code, Git, Figma

## ⚙️ Chức năng chính

### Quản lý sản phẩm
- Thêm, sửa, xóa và tìm kiếm sản phẩm.
- Hiển thị danh sách sản phẩm và thông tin chi tiết.

### Quản lý nhân viên
- Thêm, sửa, xóa thông tin nhân viên.
- Quản lý lịch làm việc và tính toán lương.

### Quản lý khách hàng
- Thêm khách hàng mới.
- Xem và tìm kiếm thông tin khách hàng.

### Quản lý hóa đơn
- Tạo hóa đơn mới.
- Sửa đổi và thống kê hóa đơn bán hàng.

### Thống kê
- Xem báo cáo doanh thu, lợi nhuận theo tháng/năm.

## 💻 Cài đặt và triển khai

### Yêu cầu hệ thống
- **Phần cứng**:
  - CPU: Intel Core i3 hoặc AMD Ryzen 3
  - RAM: 8 GB
  - Ổ cứng: SSD (tối thiểu 256 GB)
- **Phần mềm**:
  - Hệ điều hành: Windows 10 (64-bit)
  - Node.js v18.x
  - MySQL v8.x

### Hướng dẫn cài đặt
0. **Cài đặt các phần mềm cần thiết**:  
   Trước khi bắt đầu, hãy đảm bảo bạn đã cài đặt các phần mềm sau:  

   - **[Node.js](https://nodejs.org/)**:  
     - Tải và cài đặt phiên bản LTS (hiện tại là v20.x).  
     - Kiểm tra cài đặt:  
       ```bash
       node -v
       npm -v
       ```
   - **[Laragon](https://laragon.org/)**:  
     - Cài đặt phiên bản mới nhất của Laragon để thiết lập môi trường MySQL và PHPMyAdmin.
     - Sau khi cài đặt, chạy Laragon và đảm bảo MySQL hoạt động.
   - **[Git](https://git-scm.com/)**:  
     - Tải và cài đặt Git để quản lý mã nguồn.  
     - Kiểm tra cài đặt:  
       ```bash
       git --version
       ```
   - **Trình duyệt web**: Google Chrome hoặc trình duyệt bất kỳ để kiểm tra ứng dụng.  

   Sau khi hoàn tất các bước cài đặt trên, bạn có thể tiếp tục với **Bước 1**.
1. Clone repository:
   ```bash
   git clone https://github.com/Seotow/PTDACNTT_Nhom13.git
   cd PTDACNTT_Nhom13
2. **Cài đặt các package**:  
   Mở terminal trong thư mục dự án đã clone và chạy lệnh sau để cài đặt tất cả các phụ thuộc cần thiết:  
   ```bash
   npm install
3. **Khởi tạo cơ sở dữ liệu**:  
   - Mở ứng dụng Laragon và đảm bảo rằng MySQL đang chạy.  
   - Truy cập PHPMyAdmin qua đường dẫn: `http://localhost/phpmyadmin`.  
   - Thực hiện các bước sau để thiết lập cơ sở dữ liệu:  
     1. **Tạo cơ sở dữ liệu mới**:
        - Nhấn **New** trong menu bên trái.
        - Nhập tên cơ sở dữ liệu: `nhom13`.
        - Chọn **Collation** là `utf8_general_ci` và nhấn **Create**.
     2. **Import tệp dữ liệu**:
        - Chọn cơ sở dữ liệu vừa tạo trong danh sách bên trái.
        - Nhấn tab **Import**.
        - Nhấn nút **Choose File**, chọn tệp `schema.sql` từ thư mục `/database` trong dự án.
        - Nhấn **Go** để bắt đầu import. Sau khi hoàn tất, các bảng sẽ xuất hiện trong cơ sở dữ liệu.
     3. **Tạo tài khoản admin mặc định**:
        - Truy cập tab **SQL** trong PHPMyAdmin.
        - Chạy câu lệnh SQL sau (thay đổi nếu cần):
          ```sql
          INSERT INTO `staffs` (`id`, `name`, `gender`, `birthdate`, `phone`, `address`, `email`, `password`, `level`) 
          VALUES (NULL, 'Hieu', '1', NULL, '012345678', '', 'hieu@gmail.com', '123', '1');
          ```
          - **email**: `hieu@gmail.com`  
          - **password**: `123`
        - Nhấn **Go** để thực thi. Sau đó, bạn có thể sử dụng tài khoản với quyền `admin` để đăng nhập hệ thống.
4. **Chạy ứng dụng**:  
   - Mở trình duyệt và truy cập ứng dụng tại `http://localhost:3000`.  
   - Thực hiện các bước kiểm tra cơ bản:  
     1. **Đăng nhập**:  
        - Sử dụng tài khoản mặc định được thiết lập trong cơ sở dữ liệu trước đó.
        - Kiểm tra thông báo lỗi nếu nhập sai thông tin.  
     2. **Quản lý sản phẩm**:  
        - Thêm, sửa, xóa sản phẩm từ giao diện.  
        - Xác minh dữ liệu thay đổi trong cơ sở dữ liệu thông qua PHPMyAdmin.  
     3. **Quản lý nhân viên**:  
        - Thêm thông tin nhân viên mới, cập nhật thông tin, và xóa nhân viên.  
        - Đảm bảo các thay đổi hiển thị chính xác trong danh sách quản lý.  
     4. **Thống kê**:  
        - Đảm bảo tính năng tải dữ liệu hoạt động đúng.  
   - Nếu phát hiện lỗi, kiểm tra console và log trong terminal để sửa lỗi.  
