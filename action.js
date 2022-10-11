var activeNotifications = document.querySelectorAll('.active');
var numberOfNotifications = activeNotifications.length;
var allActiveNotifications = document.querySelectorAll('.notification.active');
var redDot = document.querySelectorAll('.notif-dot');
var allNotifications = document.querySelectorAll('.notification');
var notificationNumber = document.querySelector(".notification-number");
notificationNumber.innerHTML = numberOfNotifications;

$('.mark-all-btn').click(function () {

    if (numberOfNotifications != 0) {
        $('.mark-all-btn').text("Mark all as unread");  
    
        allActiveNotifications.forEach(function (element) {
            element.classList.remove('active'); //removes all active classes
        })

        numberOfNotifications = 0;
        notificationNumber.innerHTML = 0;

    } else {
        $('.mark-all-btn').text("Mark all as read");
        allNotifications.forEach(function (element) {
            element.classList.add('active'); //todo make it work
            notificationNumber.innerHTML = allNotifications.length;
        })
    }

    

})