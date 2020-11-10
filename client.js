console.log('Here are all the available people:', people);
$(document).ready(readyNow);

let personNumber = 0;

function readyNow() {
    whoToClick();
    $('#pictureSpot').on('click', '.imgClick', handleClick) // click event handler

    for (let i = 0; i < people.length; i++) { // for-of loop creating dynamic divs with unique IDs
        let newDiv = `
        <div class="${i}">
        <img class="imgClick" data-name="${people[i].githubUsername}" src="https://github.com/${people[i].githubUsername}.png?size=250" alt="${people[i].name}">
        </div>`;
        $('#pictureSpot').append(newDiv);
    };
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function handleClick() {
    let whatEva = $(this).data('name');
    if (whatEva == people[personNumber].githubUsername) {
        alert('You got it right! Go for another!');
    } else {
        alert('Keep on clicking!');
    };
    whoToClick();
    

}

function whoToClick() {
    personNumber = randomNumber(0, people.length);
    console.log(personNumber);
    switch (personNumber) {
        case 0:
            alert(`Click on ${people[0].name}!`);
            break;
        case 1:
            alert(`Click on ${people[1].name}!`);
            break;
        case 2:
            alert(`Click on ${people[2].name}!`);
            break;
        case 3:
            alert(`Click on ${people[3].name}!`);
            break;
        case 4:
            alert(`Click on ${people[4].name}!`);
            break;
        case 5:
            alert(`Click on ${people[5].name}!`);
            break;
        case 6:
            alert(`Click on ${people[6].name}!`);
            break;
        case 7:
            alert(`Click on ${people[7].name}!`);
            break;
        case 8:
            alert(`Click on ${people[8].name}!`);
            break;
        case 9:
            alert(`Click on ${people[9].name}!`);
            break;
        case 10:
            alert(`Click on ${people[10].name}!`);
            break;
    }


}