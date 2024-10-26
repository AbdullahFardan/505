// تفعيل مكتبة AOS للتمرير
AOS.init({
    duration: 1000, // مدة التأثيرات
    once: true,     // التأثير يظهر مرة واحدة فقط عند التمرير
});

// تبديل اللغة
function setLanguage(language) {
    // تحقق من وجود العناصر المطلوبة
    const languageSelection = document.getElementById("language-selection");
    const contentAr = document.getElementById("content-ar");
    const contentEn = document.getElementById("content-en");

    if (languageSelection && contentAr && contentEn) {
        // إخفاء شاشة اختيار اللغة
        languageSelection.style.display = 'none';

        // إظهار المحتوى بناءً على اللغة المختارة
        if (language === 'ar') {
            contentAr.style.display = 'block';
            contentEn.style.display = 'none';
        } else {
            contentEn.style.display = 'block';
            contentAr.style.display = 'none';
        }
    }
}

// تفعيل تأثير التحويم على الأزرار والبطاقات
const glowingElements = document.querySelectorAll('.glowing-card, .lang-button, .footer-button');

// إضافة تأثير عند التحويم على العناصر المشعة
glowingElements.forEach(function(element) {
    element.addEventListener('mouseover', function() {
        element.style.boxShadow = '0 0 20px rgba(0, 0, 255, 0.7)'; // تأثير الإشعاع
        element.style.transform = 'scale(1.05)'; // تكبير العنصر قليلاً
    });

    element.addEventListener('mouseout', function() {
        element.style.boxShadow = '0 4px 8px rgba(0, 0, 255, 0.2)'; // إعادة الظل الافتراضي
        element.style.transform = 'scale(1)'; // العودة إلى الحجم الأصلي
    });
});

// قائمة التنقل بين اللغات على الأجهزة المحمولة
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
    menuIcon.onclick = function() {
        navbar.classList.toggle("active");
    };
}
