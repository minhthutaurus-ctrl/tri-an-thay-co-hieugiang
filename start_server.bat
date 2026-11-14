@echo off
chcp 65001 > nul
title Tri An Thay Co - THCS So 2 Hieu Giang
echo ========================================================
echo   TRI ÂN THẦY CÔ - TRƯỜNG THCS SỐ 2 HIẾU GIANG
echo ========================================================
echo Đang khởi động máy chủ thử nghiệm cục bộ...
echo Vui lòng giữ cửa sổ này mở trong khi sử dụng trang web.
echo.
echo Địa chỉ truy cập: http://localhost:8080
echo.
python -m http.server 8080
pause
