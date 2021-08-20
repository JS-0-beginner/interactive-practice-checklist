console.log("This Is Main Script");

//Task(1)
document.getElementById('top-players').style.color = 'tomato';
document.getElementById('top-blogs').style.color = 'purple';
document.getElementById('latest-course').style.color = 'green';


//Task(2)

const player = document.getElementsByClassName('player');
   
for(const playerBG of player)
{
    playerBG.style.backgroundColor = "rgba(174, 174, 174, 0.226)";
    playerBG.style.borderRadius = "7px";
    playerBG.style.padding = "10px";
}

//Task(3)

document.getElementById('btn').addEventListener('click',

function()
{
    // console.log('Ping');
    const newList = document.createElement('li');
    newList.innerText = 'NEW ITEM';
    
    const parentList = document.getElementById('unordered-list');
    parentList.appendChild(newList);

}

);

//Task(4)

document.getElementById('counter-press').addEventListener('click',

function()
{
    // console.log('ping')
    const counterInput = document.getElementById('counter-input');
    let counterInputField = counterInput.value;
    // console.log(counterInputField);

    counterInputField = parseInt(counterInputField) + 1;
    counterInput.value = counterInputField;

    if(counterInput.value == 5)
    {
        document.getElementById('counter-press').setAttribute('disabled', true);
    }
    
}

);

document.getElementById('counter-reset').addEventListener('click',

function()
{
    document.getElementById('counter-press').removeAttribute('disabled');
    const counterInput = document.getElementById('counter-input');
    counterInput.value = 0;
    
}
);








