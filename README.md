# Notes App

Ứng dụng ghi chú nhanh với **Markdown Editor** (hỗ trợ toolbar), viết bằng **React + Vite**.  
Người dùng có thể viết, lưu và xoá ghi chú dễ dàng.

## Tính năng

- Viết ghi chú với Markdown (heading, bold, italic, list, code block, link, …)  
- Xem ghi chú bằng Markdown Viewer  
- Lưu ghi chú với thời gian tạo  
- Xoá ghi chú bất kỳ lúc nào  
- Giao diện hiện đại với gradient background  

## Demo giao diện
![Demo giao diện](/notes-app/notes-app-ui/public/image-demo.png)

---

## Công nghệ sử dụng

- [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)  
- [@toast-ui/react-editor](https://github.com/nhn/tui.editor) – Markdown Editor  
- CSS thuần (inline + custom styles)

---

## Cài đặt & Chạy

1. Clone project:
   ```bash
   git clone https://github.com/your-username/notes-app.git
   cd notes-app
2. Cài dependencies:
    npm install --legacy-peer-deps
3. Chạy development server:
    npm run dev
4. Mở trong trình duyệt:
    http://localhost:5173
