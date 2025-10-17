'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Custom hook for scroll animation
function useScrollAnimation() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[data-scroll-animation]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return visibleSections;
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const visibleSections = useScrollAnimation();

  useEffect(() => {
    setIsLoaded(true);

    // Show/hide scroll to top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSectionVisible = (id: string) => visibleSections.has(id);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏛️</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Văn Hóa Khmer</h1>
                <p className="text-xs text-gray-600 font-[var(--font-khmer)]">វប្បធម៌ខ្មែរ</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#" className="text-gray-700 hover:text-orange-600 transition">Trang Chủ</Link>
              <Link href="#features" className="text-gray-700 hover:text-orange-600 transition">Tính Năng</Link>
              <Link href="#culture" className="text-gray-700 hover:text-orange-600 transition">Văn Hóa</Link>
              <Link href="#about" className="text-gray-700 hover:text-orange-600 transition">Giới Thiệu</Link>
              <button className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full hover:shadow-lg transition">
                Đăng Nhập
              </button>
            </nav>

            <button className="md:hidden text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="hero" 
        data-scroll-animation
        className="pt-32 pb-20 px-4"
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-block px-4 py-2 bg-orange-100 rounded-full text-orange-600 text-sm font-semibold mb-4">
                🌟 Khám Phá Văn Hóa Khmer
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Học Văn Hóa
                <span className="block bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
                  Khmer Nam Bộ
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed font-[var(--font-khmer)]">
                រៀនវប្បធម៌ ប្រពៃណី និងសាសនាខ្មែរកម្ពុជាក្រោម
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Bảo tồn, lan tỏa và giáo dục các giá trị văn hóa đặc trưng của cộng đồng người Khmer 
                sinh sống tại Nam Bộ Việt Nam thông qua nền tảng công nghệ hiện đại.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                  <span>Bắt Đầu Học</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                
                <button className="px-8 py-4 bg-white border-2 border-orange-500 text-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  <span>Xem Demo</span>
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8">
                <div>
                  <div className="text-3xl font-bold text-orange-600">100+</div>
                  <div className="text-sm text-gray-600">Bài Học</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">50+</div>
                  <div className="text-sm text-gray-600">Di Sản</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">1000+</div>
                  <div className="text-sm text-gray-600">Người Học</div>
                </div>
              </div>
            </div>

            {/* Right Image/Animation */}
            <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                {/* Decorative circles */}
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-br from-red-300 to-orange-400 rounded-full opacity-20 animate-pulse delay-75"></div>
                
                {/* Main image placeholder */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm">
                  <div className="aspect-square bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 rounded-2xl flex items-center justify-center overflow-hidden">
                    {/* Temple Icon */}
                    <div className="text-9xl animate-float">🏛️</div>
                  </div>
                  
                  {/* Floating cards */}
                  <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg p-4 animate-float">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">📚</span>
                      <div>
                        <div className="text-xs text-gray-500">Bài Học</div>
                        <div className="font-bold text-orange-600">Phật Giáo</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 animate-float delay-100" style={{animationDelay: '0.5s'}}>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">🎭</span>
                      <div>
                        <div className="text-xs text-gray-500">Lễ Hội</div>
                        <div className="font-bold text-orange-600">Chol Chnam</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 -left-8 bg-white rounded-2xl shadow-lg p-4 animate-float" style={{animationDelay: '1s'}}>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">🗣️</span>
                      <div>
                        <div className="text-xs text-gray-500">Ngôn Ngữ</div>
                        <div className="font-bold text-orange-600">Tiếng Khmer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="features" 
        data-scroll-animation
        className="py-20 px-4 bg-white"
      >
        <div className="container mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isSectionVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tính Năng Nổi Bật</h2>
            <p className="text-gray-600 text-lg">Khám phá các chức năng học tập đa dạng</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-orange-100 ${
                  isSectionVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-500 mb-3 font-[var(--font-khmer)]">{feature.titleKhmer}</p>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                
                <button className="mt-6 text-orange-600 font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all">
                  <span>Tìm hiểu thêm</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Highlights Section */}
      <section 
        id="culture" 
        data-scroll-animation
        className="py-20 px-4 bg-gradient-to-br from-orange-50 to-amber-50"
      >
        <div className="container mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isSectionVisible('culture') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Khám Phá Văn Hóa</h2>
            <p className="text-gray-600 text-lg">Trải nghiệm những giá trị văn hóa độc đáo</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {cultureCategories.map((category, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer ${
                  isSectionVisible('culture') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-500 font-[var(--font-khmer)] mb-2">{category.titleKhmer}</p>
                  <p className="text-sm text-gray-600">{category.count} nội dung</p>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white w-full">
                    <p className="text-sm mb-2">{category.description}</p>
                    <button className="text-white font-semibold flex items-center space-x-2">
                      <span>Khám phá</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="cta" 
        data-scroll-animation
        className="py-20 px-4 bg-gradient-to-r from-amber-500 via-orange-600 to-red-600"
      >
        <div className={`container mx-auto text-center transition-all duration-1000 ${
          isSectionVisible('cta') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bắt Đầu Hành Trình Khám Phá
          </h2>
          <p className="text-xl text-white/90 mb-8 font-[var(--font-khmer)]">
            ចាប់ផ្តើមធ្វើដំណើរស្វែងយល់ពីវប្បធម៌ខ្មែរ
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
              Đăng Ký Miễn Phí
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              Xem Hướng Dẫn
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-xl">🏛️</span>
                </div>
                <span className="font-bold text-lg">Văn Hóa Khmer</span>
              </div>
              <p className="text-gray-400 text-sm">
                Bảo tồn và lan tỏa giá trị văn hóa Khmer Nam Bộ
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Chức Năng</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-orange-500">Bài Học</a></li>
                <li><a href="#" className="hover:text-orange-500">Lễ Hội</a></li>
                <li><a href="#" className="hover:text-orange-500">Di Sản</a></li>
                <li><a href="#" className="hover:text-orange-500">Bản Đồ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Hỗ Trợ</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-orange-500">Hướng Dẫn</a></li>
                <li><a href="#" className="hover:text-orange-500">Liên Hệ</a></li>
                <li><a href="#" className="hover:text-orange-500">FAQ</a></li>
                <li><a href="#" className="hover:text-orange-500">Chính Sách</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Theo Dõi</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition">
                  <span>📘</span>
                </a>
                <a href="#" className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition">
                  <span>📷</span>
                </a>
                <a href="#" className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition">
                  <span>🎥</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 Website Văn Hóa Khmer Nam Bộ - Lâm Nhật Hào (110122071)</p>
            <p className="mt-2">GVHD: Thạch Kong Saoane</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-110 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}

const features = [
  {
    icon: '📚',
    title: 'Bài Học Đa Dạng',
    titleKhmer: 'មេរៀនចម្រុះ',
    description: 'Học về Phật giáo Nam tông, tiếng Khmer, văn hóa truyền thống qua video, hình ảnh và bài tập tương tác.',
  },
  {
    icon: '🎭',
    title: 'Lễ Hội Truyền Thống',
    titleKhmer: 'ពិធីបុណ្យប្រពៃណី',
    description: 'Khám phá Chol Chnam Thmay, Ok Om Bok, Sen Dolta với hình ảnh, video và lịch tổ chức chi tiết.',
  },
  {
    icon: '🗺️',
    title: 'Bản Đồ Di Sản',
    titleKhmer: 'ផែនទីបេតិកភណ្ឌ',
    description: 'Tìm kiếm chùa, di tích, di sản văn hóa Khmer gần bạn với công nghệ bản đồ tương tác.',
  },
  {
    icon: '🗣️',
    title: 'Học Tiếng Khmer',
    titleKhmer: 'រៀនភាសាខ្មែរ',
    description: 'Học từ vựng, phát âm, ngữ pháp tiếng Khmer qua bài giảng có âm thanh và bài tập luyện tập.',
  },
  {
    icon: '🤖',
    title: 'AI Chatbot',
    titleKhmer: 'ជំនួយការ AI',
    description: 'Trò chuyện với trợ lý ảo thông minh để tìm hiểu về văn hóa, lễ hội, và địa điểm văn hóa Khmer.',
  },
  {
    icon: '🏆',
    title: 'Gamification',
    titleKhmer: 'កម្មវិធីគ្រប់គ្រង',
    description: 'Nhận điểm, huy hiệu, tham gia bảng xếp hạng khi hoàn thành bài học và thử thách.',
  },
];

const cultureCategories = [
  {
    icon: '🏛️',
    title: 'Chùa Khmer',
    titleKhmer: 'វត្តខ្មែរ',
    count: '50+',
    description: 'Khám phá kiến trúc độc đáo của các ngôi chùa Khmer Nam Bộ',
  },
  {
    icon: '📖',
    title: 'Truyện Dân Gian',
    titleKhmer: 'រឿងព្រេងប្រជាជន',
    count: '30+',
    description: 'Đọc và nghe những câu chuyện truyền thống đầy ý nghĩa',
  },
  {
    icon: '🎨',
    title: 'Nghệ Thuật',
    titleKhmer: 'សិល្បៈ',
    count: '40+',
    description: 'Tìm hiểu về nghệ thuật điêu khắc, vẽ, múa truyền thống',
  },
  {
    icon: '🍲',
    title: 'Ẩm Thực',
    titleKhmer: 'ម្ហូបអាហារ',
    count: '25+',
    description: 'Khám phá hương vị độc đáo của món ăn Khmer',
  },
];
