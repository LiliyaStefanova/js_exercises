const weekday = 'Sunday';
switch(weekday.toLowerCase()){
    case 'monday':
        console.log(`You entered ${weekday}. The next day is: Tuesday`);
        break;
    case 'tuesday':
        console.log(`You entered ${weekday}. The next day is: Wednesday`);
        break;
    case 'wednesday':
        console.log(`You entered ${weekday}. The next day is: Thursday`);
        break;
    case 'thursday':
        console.log(`You entered ${weekday}. The next day is: Friday`);
        break;
    case 'friday':
        console.log(`You entered ${weekday}. The next day is: Saturday`);
        break;
    case 'saturday':
        console.log(`You entered ${weekday}. The next day is: Sunday`);
        break;
    case 'sunday':
        console.log(`You entered ${weekday}. The next day is: Monday`);
        break;
    default:
        console.log('Please enter a valid day of the week');
}