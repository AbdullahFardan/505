// تفعيل مكتبة AOS للتمرير
AOS.init({
    duration: 1000, // مدة التأثيرات
    once: true,     // التأثير يظهر مرة واحدة فقط عند التمرير
});

// تبديل اللغة
function setLanguage(language) {
    // إخفاء شاشة اختيار اللغة
    document.getElementById("language-selection").style.display = 'none';

    // إظهار المحتوى بناءً على اللغة المختارة
    if (language === 'ar') {
        document.getElementById("content-ar").style.display = 'block';
        document.getElementById("content-en").style.display = 'none';
    } else {
        document.getElementById("content-en").style.display = 'block';
        document.getElementById("content-ar").style.display = 'none';
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
document.getElementById("menu-icon").onclick = function() {
    document.querySelector(".navbar").classList.toggle("active");
};

// تفعيل القائمة المنسدلة على الأجهزة المحمولة (في حال كنت تستخدم قائمة)
document.getElementById("menu-icon").onclick = function() {
    document.querySelector(".navbar").classList.toggle("active");
};
