function getName() {
    let a = document.getElementById('name_field').value;
    let result =  a.split(' ');
    a = result[0] + ' ' + result[1];
    document.getElementById('result_field').value = a;
    
    let my_date = new Date, 
    my_hours = my_date.getHours(),
    elements = document.getElementById('time'), 
    name = a;

    switch(true) {
        case (my_hours >= 5) && (my_hours < 11):elements.innerHTML = 'Доброе утро, ' + name;
        break;
        case (my_hours >= 11) && (my_hours < 16):elements.innerHTML = 'Добрый день, ' + name;
        break;
        case (my_hours >= 16) && (my_hours < 23):elements.innerHTML = 'Добрый вечер, ' + name;
        break;
        case (my_hours >= 0) && (my_hours < 5):elements.innerHTML = 'Доброй ночи, ' + name;
        break;
    }
}