//implicit-false
const name = '';

if (!name) {
    console.log('No name provided');
} else {
    console.log('We have a name!');
}

//case-sensitive

if (status.toUpperCase() === 'ERROR') {
    console.log('Something went wrong!');
} else {
    console.log('Looks great!!');
}


//and

const status = 500;

if (status === 200) {
    console.log('OK!');
} else if (status === 400) || status === 500) {
    console.log('Error!');
} else {
    console.log('Unknown status');
}

//switch

switch (status) {
    case 200:
        console.log('OK!');
    case 400: // or
    case 500: // or
        console.log('Error!');
        break;
    default: // else
        console.log('Unknown status');
        break;
}