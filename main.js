import './src/style.css'

import Alpine from 'alpinejs'



window.Alpine = Alpine

document.addEventListener('alpine:init', () => {
    Alpine.store('app', {
        currentLang: 'en', // اللغة الافتراضية

        setLang(lang) {
            this.currentLang = lang;
            // تغيير اتجاه الصفحة (RTL للأولى و LTR للثانية)
            document.documentElement.dir = (lang === 'en' ? 'ltr' : 'rtl');
            document.documentElement.lang = lang;

            // اختيارياً: حفظ اللغة في المتصفح ليتذكرها عند التحديث
            localStorage.setItem('lang', lang);
        }
    })
})

// header js 
document.addEventListener('alpine:init', () => {
    // مخزن البيانات المشترك
    Alpine.store('navigation', {
        menuItems: [
            {
                id: 1, labelAr: 'عن الجامعة', labelEn: 'About', hasDropdown: true,
                children: [
                    { labelAr: 'الرؤية والرسالة', labelEn: 'Vision & Mission', url: '#' },
                    { labelAr: 'كلمة رئيس الجامعة', labelEn: 'President\'s Speech', url: '#' }
                ]
            },
            {
                id: 2, labelAr: 'الكليات', labelEn: 'Faculties', hasDropdown: true,
                children: [
                    { labelAr: 'كلية الطب', labelEn: 'Medicine', url: '#' },
                    { labelAr: 'كلية طب الأسنان', labelEn: 'Dentistry', url: '#' }
                ]
            },
            {
                id: 3, labelAr: 'القبول والتسجيل', labelEn: 'Admissions', hasDropdown: true,
                children: [
                    { labelAr: 'شروط القبول', labelEn: 'Admission Requirements', url: '#' },
                    { labelAr: 'الرسوم الدراسية', labelEn: 'Tuition Fees', url: '#' }
                ]
            },
           
            {
                id: 5, labelAr: 'الحياة الجامعية', labelEn: 'Campus Life', hasDropdown: true,
                children: [
                    { labelAr: 'المكتبة', labelEn: 'Library', url: '#' },
                    { labelAr: 'الأنشطة', labelEn: 'Activities', url: '#' }
                ]
            },
            { id: 4, labelAr: 'أخبارنا', labelEn: 'News', hasDropdown: false, url: '#' },
            {
                id: 6, labelAr: 'تواصل معنا', labelEn: 'Contact', hasDropdown: false,
                
            }
        ]
    });

    // مخزن حالة التطبيق (اللغة)
    Alpine.store('app', {
        currentLang: savedLang, 
        setLang(lang) {
            this.currentLang = lang;
            localStorage.setItem('lang', lang);
            document.documentElement.lang = lang;
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        }
    });
});



// hero
Alpine.store('hero', {
    currentIndex: 0, // المؤشر الحالي للصورة

    // النصوص الأساسية
    titleAr: ' الجامعة السورية الخاصة',
    titleEn: 'Syrian Private University',
    subtitleAr: 'تعليم أكاديمي متميز يجمع بين الخبرة والابتكار لبناء جيل مبدع.',
    subtitleEn: 'Explore accredited programs, campus life and a direct path to your success .....',

    // مصفوفة الصور (تم تصحيح الأقواس هنا)
    images: [
        '/images/slider-1-campus.jpeg'
        // '/images/slider-2-campus.jpeg', // افترضت وجود صورة ثانية
        // '/images/slider-3-campus.jpeg'
    ],

    primaryBtnAr: 'استكشف البرامج',
    primaryBtnEn: 'Explore Programs',
    secondaryBtnAr: ' جولة افتراضية',
    secondaryBtnEn: 'Virtual Tour ',

    // وظيفة التبديل التلقائي
    init() {
        setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }, 5000); // تبديل كل 5 ثوانٍ
    }
});
window.Alpine = Alpine;
Alpine.start();