// النافذة المنبثقة
window.onload = function () {
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    setTimeout(() => {
        popup.style.display = 'none';
    }, 10000); // إخفاء النافذة بعد 10 ثوانٍ
};

// تشغيل العداد الرقمي بالأيام والساعات والدقائق والثواني
function countdownTimer(daysId, hoursId, minutesId, secondsId, targetDate) {
    setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(daysId).innerHTML = days;
        document.getElementById(hoursId).innerHTML = hours;
        document.getElementById(minutesId).innerHTML = minutes;
        document.getElementById(secondsId).innerHTML = seconds;

        if (distance < 0) {
            document.getElementById(daysId).innerHTML = "0";
            document.getElementById(hoursId).innerHTML = "0";
            document.getElementById(minutesId).innerHTML = "0";
            document.getElementById(secondsId).innerHTML = "0";
        }
    }, 1000);
}

const targetDate = new Date('2024-10-05T16:00:00').getTime(); // تحديد التاريخ المستهدف

// تشغيل العداد في الشاشة المنبثقة
countdownTimer('popup-days', 'popup-hours', 'popup-minutes', 'popup-seconds', targetDate);

// تشغيل العداد في الصفحة الرئيسية
countdownTimer('main-days1', 'main-hours1', 'main-minutes1', 'main-seconds1', targetDate);
countdownTimer('main-days2', 'main-hours2', 'main-minutes2', 'main-seconds2', targetDate);
countdownTimer('main-days3', 'main-hours3', 'main-minutes3', 'main-seconds3', targetDate);


// إضافة الأنيميشن عند التمرير
const elements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.5
});

elements.forEach(el => observer.observe(el));

// إظهار أو إخفاء أيقونة السهم عند التمرير
window.onscroll = function() {
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopButton.style.display = "block"; // إظهار الأيقونة بعد التمرير للأسفل
    } else {
        scrollToTopButton.style.display = "none"; // إخفاء الأيقونة عندما يكون المستخدم في أعلى الصفحة
    }
};

// عند النقر على أيقونة السهم، يتم العودة لأعلى الصفحة
document.getElementById('scrollToTop').addEventListener('click', function(event) {
    event.preventDefault(); // منع الإجراء الافتراضي للرابط
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // التنقل بسلاسة إلى أعلى الصفحة
    });
});
