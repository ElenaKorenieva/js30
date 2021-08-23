var data = new Date();
var month = new Array(12);
     month[1] = 'Января';
     month[2] = 'Февраля';
     month[3] = 'Марта';
     month[4] = 'Апреля';
     month[5] = 'Мая';
     month[6] = 'Июня';
     month[7] = 'Июля';
     month[8] = 'Августа';
     month[9] = 'Сентября';
     month[10] = 'Октября';
     month[11] = 'Ноября';
     month[12] = 'Декабря';

var weekday = new Array(7);
    weekday[0] = 'Воскресенье';
    weekday[1] = 'Понедельник';
    weekday[2] = 'Вторник';
    weekday[3] = 'Среда';
    weekday[4] = 'Четверг';
    weekday[5] = 'Пятница';
    weekday[6] = 'Суббота';

document.write(data.toLocaleTimeString() + ' ' + weekday[data.getDay()] + ', ' + data.getDate()+ ' ' + month[data.getMonth()+1])