console.log('Here are all the available people:', people);
$(document).ready(readyNow);

function readyNow() {
    whoToClick();
    let personNumber = randomNumber(0, people.length);
    console.log(personNumber);

    for (let i = 0; i < people.length; i++) {
        let newDiv = `
        <div class="${i}">
        <img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="${people[i].name}">
        </div>`;
        $('#pictureSpot').append(newDiv);
    };
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function handleClick() {
    console.log('in handleClick');
}

function whoToClick() {
    let personNumber = randomNumber(0, people.length);
    console.log(personNumber);
    switch (personNumber) {
        case 0:
            alert(`Click on: ${people[0].name}`);
            break;
        case 1:
            alert(`Click on: ${people[1].name}`);
            break;
        case 2:
            alert(`Click on: ${people[2].name}`);
            break;
        case 3:
            alert(`Click on: ${people[3].name}`);
            break;
        case 4:
            alert(`Click on: ${people[4].name}`);
            break;
        case 5:
            alert(`Click on: ${people[5].name}`);
            break;
        case 6:
            alert(`Click on: ${people[6].name}`);
            break;
        case 7:
            alert(`Click on: ${people[7].name}`);
            break;
        case 8:
            alert(`Click on: ${people[8].name}`);
            break;
        case 9:
            alert(`Click on: ${people[9].name}`);
            break;
        case 10:
            alert(`Click on: ${people[10].name}`);
            break;
    }


}