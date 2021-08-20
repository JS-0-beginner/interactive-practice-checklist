console.log("Ok I'm in");

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

)








