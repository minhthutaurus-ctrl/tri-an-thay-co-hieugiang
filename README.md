# Trang Web Tri Ân Thầy Cô - Trường THCS Số 2 Hiếu Giang 🌻💌

Dự án trang web tri ân, chúc mừng các Thầy Cô giáo tại **Trường THCS Số 2 Hiếu Giang** nhân ngày Nhà giáo Việt Nam 20/11 và các dịp kỷ niệm ý nghĩa. 

Trang web được thiết kế theo phong cách **Scrapbook / Lưu bút học trò**, kết hợp hiệu ứng phong bì thư tay 3D, giấy vở ô ly học sinh, hiệu ứng hoa hướng dương và trái tim bay bổng, tích hợp giọng nói thực tế và tính năng tạo mã QR dán báo tường.

---

## 🌟 Các Tính Năng Chính

### 1. Lựa Chọn & Tìm Kiếm Thông Tin Giáo Viên (Phần 1)
* **Phân loại danh xưng:** Bộ lọc nhanh giữa **Tất cả**, **Thầy giáo** (👨‍🏫) và **Cô giáo** (👩‍🏫).
* **Danh sách giáo viên tích hợp sẵn:** Có sẵn danh sách thầy cô cùng bộ môn (Toán, Văn, Tiếng Anh, Tin học, KHTN/Vật lý, Hóa học, Lịch sử, Thể dục, Ban Giám Hiệu...).
* **Thanh tìm kiếm thông minh:** Tìm nhanh theo tên thầy cô hoặc môn học (ví dụ: gõ "Toán", "Hà", "Hưng"...).
* **Quyền tự chỉnh sửa (CRUD):** 
  * Thêm thầy cô mới bất kỳ lúc nào.
  * Chỉnh sửa tên, môn, lời chúc, màu sắc thẻ.
  * Tự động sinh gợi ý lời chúc theo từng bộ môn đặc thù.
  * Dữ liệu được lưu trữ tự động trên trình duyệt (`LocalStorage`), hỗ trợ xuất và nhập file sao lưu `.JSON`.

### 2. Bức Thư Tay & Trải Nghiệm Đa Giác Quan (Phần 2)
* **Hiệu ứng phong bì thư tay tương tác (3D Envelope):** 
  * Mô phỏng phong bì thư cổ điển với tem thư Hiếu Giang và dấu sáp niêm phong đỏ.
  * Khi bấm mở thư, nắp phong bì bung mở mượt mà và bức thư giấy kẻ ngang học sinh trượt ra ngoài.
* **Nội dung thư trên nền giấy vở học sinh:** Nền giấy kẻ ngang ô ly có lề đỏ, phông chữ viết tay học trò mềm mại, xúc động.
* **Tích hợp Giọng đọc thực tế (Real Audio):**
  * Tích hợp máy ghi âm trực tiếp ngay trên trình duyệt (sử dụng `MediaRecorder API`) để học sinh thu âm giọng nói thật của lớp.
  * Hỗ trợ tải tệp âm thanh thu sẵn từ điện thoại (`MP3`, `M4A`, `WAV`, `OGG`).
  * Lưu trữ file âm thanh an toàn bằng `IndexedDB` (không bị giới hạn dung lượng như LocalStorage thông thường).
  * Trình phát nhạc phong cách máy nghe nhạc học trò (thanh tua tiến trình, thời gian, nút phát/dừng).
* **Hiệu ứng thị giác sinh động:**
  * Hiệu ứng hoa hướng dương và trái tim pastel bay lơ lửng khắp màn hình (vẽ bằng HTML5 Canvas).
  * Nhạc nền du dương (tổng hợp âm thanh Acoustic Chimes thư thái bằng Web Audio API) có thể bật/tắt ở góc màn hình.

### 3. Tự Động Sinh Mã QR & Tiện Ích Dán Thiệp (Phần 3)
* **Tự động tạo mã QR riêng biệt:** Mỗi thầy cô có một mã QR riêng chứa đường dẫn trực tiếp mở bức thư tay tương ứng.
* **Tải ảnh thiệp QR sắc nét (PNG):** Tạo sẵn thiệp lưu niệm đóng khung phong cách scrapbook có tên trường THCS Số 2 Hiếu Giang, tên Thầy/Cô, môn học, mã QR và câu tri ân – tiện lợi tải về in ảnh.
* **In thiệp / In mã QR trực tiếp:** Tích hợp bộ style chuẩn `@media print` để in trực tiếp ra giấy A4 hoặc giấy bìa dán báo tường.
* **Sao chép đường dẫn:** Dễ dàng gửi link qua Zalo, Messenger hoặc Facebook.

---

## 🚀 Hướng Dẫn Khởi Chạy

### Cách 1: Mở trực tiếp bằng trình duyệt
* Nhấp đúp chuột vào tệp `index.html` để mở ngay trên bất kỳ trình duyệt nào (Chrome, Edge, Cốc Cốc, Firefox).

### Cách 2: Khởi chạy với máy chủ cục bộ (Khuyên dùng để sử dụng đầy đủ Micro ghi âm)
1. Nhấp đúp chuột vào tệp `start_server.bat`.
2. Mở trình duyệt và truy cập: **`http://localhost:8080`**.

---

## 📁 Cấu Trúc Thư Mục Dự Án

```
tri-an-thay-co-hieugiang/
├── index.html          # Giao diện chính hoàn chỉnh
├── style.css           # Toàn bộ định dạng CSS phong cách scrapbook & in ấn
├── app.js              # Xử lý logic, LocalStorage, IndexedDB, Audio, QR Code
├── qrcode.min.js       # Thư viện tạo mã QR offline
├── start_server.bat    # Script khởi chạy nhanh máy chủ cục bộ
└── README.md           # Tài liệu hướng dẫn sử dụng
```

