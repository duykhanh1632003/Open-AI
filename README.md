MERN Stack AI Chatbot
This is an AI Chatbot application, inspired by ChatGPT, by using MERN Stack and OpenAI

It's a customized chatbot where each message of the user is stored in DB and can be retrieved and deleted.

It's a completely secure application using JWT Tokens, HTTP-Only Cookies, Signed Cookies, Password Encryption, and Middleware Chains.

Contributions are welcome


res.cookie() là một phương thức trong Express.js được sử dụng để gửi một HTTP cookie từ server đến client. Dưới đây là chi tiết các tham số trong câu lệnh res.cookie() mà bạn đã cung cấp:

javascript
Copy code
res.cookie("auth_token", token, {
    path: "/",
    domain: "localhost",
    expires: /* Giá trị thời điểm hết hạn */,
    httpOnly: true,
    signed: true
});
"auth_token": Tên của cookie. Trong trường hợp này, tên cookie là "auth_token".

token: Giá trị của cookie. Đây thường là một chuỗi chứa thông tin bạn muốn lưu trữ trên máy tính của người dùng, thường là một mã thông báo xác thực hoặc một đoạn mã được ký để bảo mật.

Options (đối số thứ ba của hàm res.cookie()):

path ("/"): Đường dẫn mà cookie áp dụng. Trong trường hợp này, cookie sẽ áp dụng cho tất cả các đường dẫn.

domain ("localhost"): Tên miền mà cookie áp dụng. Cookie chỉ được gửi đến server khi yêu cầu tới domain này. Trong trường hợp này, cookie chỉ được gửi khi yêu cầu tới "localhost".

expires: Thời điểm hết hạn của cookie. Bạn có thể sử dụng một đối tượng Date để xác định thời điểm cụ thể.

httpOnly (true): Đặt thành true để cookie chỉ có thể được truy cập thông qua HTTP và không thể truy cập thông qua JavaScript trong trình duyệt. Điều này giúp bảo vệ cookie khỏi các cuộc tấn công chèn mã (XSS).

signed (true): Đặt thành true để ký (sign) cookie. Khi cookie được ký, server có thể kiểm tra xem cookie có bị thay đổi không. Điều này giúp bảo vệ cookie khỏi các cuộc tấn công giả mạo cookie. Để sử dụng tính năng này, bạn cần cấu hình express để sử dụng cookie được ký (signed cookies).