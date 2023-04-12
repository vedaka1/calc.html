function getName() {
    let name = document.getElementById('name_field').value;
    let result =  name.split(' ');
    name = result[1] + ' ' + result[2];
    
    let my_date = new Date, 
    my_hours = my_date.getHours(),
    elements = document.getElementById('time');

    switch(true) {
        case (my_hours >= 5) && (my_hours < 11):elements.innerHTML = 'Доброе утро, ' + name;
        break;
        case (my_hours >= 11) && (my_hours < 16):elements.innerHTML = 'Добрый день, ' + name;
        break;
        case (my_hours >= 16) && (my_hours < 24):elements.innerHTML = 'Добрый вечер, ' + name;
        break;
        case (my_hours >= 0) && (my_hours < 5):elements.innerHTML = 'Доброй ночи, ' + name;
        break;
    }

    let today = new Date();
    let birthDate = document.getElementById('date_field').value;
    let birthMonth = Number(birthDate.slice(5, 7));
    let birthDay = Number(birthDate.slice(8, 10));

    if (birthDate.slice(6, 7) < today.getMonth()) {birthDate = today.getFullYear()+1 + birthDate.slice(4)} else {birthDate = today.getFullYear() + birthDate.slice(4)};
    birthDate = new Date(birthDate.replace(/^(\d+)\.(\d+).(\d+)$/, "$3-$2-$1"));
    document.getElementById('result_date_field').innerHTML = (Math.floor( (birthDate - today) / 1000 / 60 / 60 / 24) + ' дней до Вашего Дня Рождения!' + '<br/>'); // количество дней)

    let season = document.getElementById('result_date_field');

    switch(true) {
        case (birthMonth == 12) || (birthMonth >= 1) && (birthMonth < 3):season.innerHTML += '<br/>' +'Ты родился ' + birthDay + ' числа' + ', чудесный зимний день';
        document.body.style.backgroundImage = "url('images/winter.jpg')";
        break;
        case (birthMonth >= 3) && (birthMonth < 7):season.innerHTML += '<br/>' + 'Ты родился ' + birthDay + ' числа' + ', чудесный весенний день';
        document.body.style.backgroundImage = "url('images/spring.jpg')";
        break;
        case (birthMonth >= 7) && (birthMonth < 10):season.innerHTML += '<br/>' + 'Ты родился ' + birthDay + ' числа' + ', чудесный летний день';
        document.body.style.backgroundImage = "url('images/summer.jpg')";
        break;
        case (birthMonth >= 10) && (birthMonth < 12):season.innerHTML += '<br/>' + 'Ты родился ' + birthDay + ' числа' + ', чудесный осенний день';
        document.body.style.backgroundImage = "url('images/autumn.jpg')";
        break;
    }
}

function image() {
    document.body.style.backgroundImage = "url('images/autumn.jpg')";
}