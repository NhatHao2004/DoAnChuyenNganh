# 🎨 Frontend - Website Văn Hóa Khmer Nam BộThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



Frontend application cho dự án Website Hỗ Trợ Học Văn Hóa Khmer Nam Bộ.## Getting Started



## ✅ HOÀN THÀNHFirst, run the development server:



### Trang Chủ (Homepage) ✨```bash

npm run dev

Trang chủ được thiết kế với đầy đủ animation và màu sắc đậm chất văn hóa Khmer:# or

yarn dev

**Features:**# or

- ✅ Hero Section với animation fade-inpnpm dev

- ✅ Typography song ngữ Việt-Khmer# or

- ✅ 6 tính năng nổi bật với hover effectsbun dev

- ✅ 4 danh mục văn hóa với overlay animation```

- ✅ CTA section với gradient Khmer

- ✅ Footer đầy đủOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- ✅ Responsive design (mobile, tablet, desktop)

- ✅ Custom animations (float, fadeIn, shimmer)You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

- ✅ Khmer color palette

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 🚀 Chạy Dự Án

## Learn More

```bash

# Di chuyển vào thư mục frontendTo learn more about Next.js, take a look at the following resources:

cd frontend

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

# Cài đặt dependencies (nếu chưa)- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

npm install

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

# Chạy development server

npm run dev## Deploy on Vercel

```

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Mở browser: **http://localhost:3000** (hoặc 3001 nếu port 3000 bị chiếm)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.6 (App Router)
- **UI Library:** React 19.1.0
- **Styling:** Tailwind CSS v4
- **Fonts:** 
  - Geist Sans (Latin)
  - **Noto Serif Khmer** (Khmer Unicode)
- **Language:** TypeScript

## 🎨 Design System

### Color Palette (Màu Văn Hóa Khmer)
```css
--khmer-gold: #D4AF37     /* Vàng chùa chiền */
--khmer-red: #DC2626      /* Đỏ lễ hội */
--khmer-orange: #F97316   /* Cam áo lam */
--khmer-temple: #8B4513   /* Nâu gỗ */
```

### Animations
- `float` - Hiệu ứng floating cho cards
- `fadeInUp` - Fade in từ dưới lên
- `fadeInLeft` - Fade in từ trái sang
- `fadeInRight` - Fade in từ phải sang
- `scaleIn` - Scale animation
- `shimmer` - Shimmer effect cho gradient borders

## 📄 Trang Đã Hoàn Thành

- [x] **Homepage** (`/`) - Trang chủ với animation

## 🔜 Trang Cần Phát Triển

### Authentication
- [ ] Login page (`/login`)
- [ ] Register page (`/register`)
- [ ] Forgot password

### Main Pages
- [ ] Culture page (`/culture`) - Văn hóa Khmer
- [ ] Lessons page (`/lessons`) - Bài học
  - [ ] Buddhism lessons
  - [ ] Language lessons
- [ ] Festivals page (`/festivals`) - Lễ hội
- [ ] Map page (`/map`) - Bản đồ di sản
- [ ] Stories page (`/stories`) - Truyện dân gian

### User Pages
- [ ] Profile page (`/profile`)
- [ ] Learning progress
- [ ] Leaderboard (`/leaderboard`)
- [ ] Badges & achievements

### Admin Pages
- [ ] Admin dashboard
- [ ] Content management
- [ ] User management
- [ ] Analytics

## 🧩 Components Cần Tạo

```
src/components/
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── Modal.tsx
│   └── Badge.tsx
├── layout/
│   ├── Header.tsx (có sẵn trong page.tsx)
│   ├── Footer.tsx (có sẵn trong page.tsx)
│   ├── Sidebar.tsx
│   └── MobileMenu.tsx
├── shared/
│   ├── LanguageSwitcher.tsx (Việt ⇔ Khmer)
│   ├── Chatbot.tsx (AI Assistant)
│   ├── SearchBar.tsx
│   └── Notification.tsx
├── culture/
│   ├── CultureCard.tsx
│   ├── CultureList.tsx
│   └── CultureDetail.tsx
├── lessons/
│   ├── LessonCard.tsx
│   ├── Quiz.tsx
│   └── Progress.tsx
└── festivals/
    ├── FestivalCard.tsx
    └── Calendar.tsx
```

## 🎯 Features Cần Implement

### Giao diện
- [ ] Dark mode toggle
- [ ] Language switcher (Việt ⇔ Khmer)
- [ ] Mobile menu responsive
- [ ] Search functionality
- [ ] Loading states
- [ ] Error boundaries

### Tích hợp
- [ ] API integration với backend
- [ ] User authentication (JWT)
- [ ] Protected routes
- [ ] Form validation
- [ ] Image optimization
- [ ] SEO optimization

### Interactive
- [ ] AI Chatbot widget (floating)
- [ ] Notification system
- [ ] Real-time updates
- [ ] Progressive Web App (PWA)

## 📱 Responsive Design

Đã tối ưu cho:
- ✅ Mobile (< 768px)
- ✅ Tablet (768px - 1024px)
- ✅ Desktop (> 1024px)

## 🎬 Screenshots

**Homepage Features:**
1. Hero section với tiêu đề song ngữ
2. Floating animation cards
3. 6 feature cards với hover effects
4. 4 culture categories với overlay
5. CTA section gradient
6. Footer với links

## 📦 Scripts

```bash
npm run dev          # Development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🔗 Integration với Backend

Backend API: `http://localhost:3001/api`

### API Endpoints (sẽ tích hợp):
```typescript
// Authentication
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/profile

// Lessons
GET  /api/lessons
GET  /api/lessons/:id

// Festivals
GET  /api/festivals
GET  /api/festivals/nearby

// Culture
GET  /api/culture
GET  /api/culture/category/:category
```

## 🎨 Figma Design (Đề xuất)

Nếu cần thiết kế chi tiết hơn, có thể tạo Figma design cho:
- Wireframes
- Component library
- Style guide
- Prototype

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/docs/)

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build
npm run build

# Deploy dist folder
```

## 📝 Notes

- Font Khmer: Noto Serif Khmer được load từ Google Fonts
- Tất cả text Khmer nên dùng class `font-[var(--font-khmer)]`
- Animation delays được set theo thứ tự: 0ms, 100ms, 200ms...
- Màu chính: Orange gradient (Khmer theme)

---

**Developed by:** Lâm Nhật Hào (110122071)  
**Project:** Website Văn Hóa Khmer Nam Bộ  
**Version:** 1.0.0 - Homepage Complete ✅
