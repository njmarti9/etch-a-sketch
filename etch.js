const bottomContainer = document.querySelector('#bottomContainer');

for (var i = 0; i < 16; i++){
    const box = document.createElement('div');
    box.classList.add('gridBox');
    bottomContainer.appendChild(box);

    box.addEventListener('mouseover', function (e) {
        console.log(e.target.style.background);
        e.target.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
    });

    box.addEventListener('mouseout', function (e) {
        console.log(e.target.style.background);
        e.target.style.background = "white";
    });
}

const newGridBtn = document.querySelector('#newGridBtn');
newGridBtn.addEventListener('click', function (e) {
    removeGrid();
    createGrid();
});

function removeGrid(){
    const node = bottomContainer.firstChild;
    while (bottomContainer.firstChild != null){
        bottomContainer.removeChild(bottomContainer.lastChild);
    }
}

function createGrid(){
    let size = prompt("Please Enter A Grid Size (100 or Under)");
    gridAmount = size * size;
    document.getElementById("bottomContainer").style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (var i = 0; i < gridAmount; i++){
        const box = document.createElement('div');
        box.classList.add('gridBox');
        bottomContainer.appendChild(box);
    
        box.addEventListener('mouseover', function (e) {
            e.target.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
        });
    
        box.addEventListener('mouseout', function (e) {
            e.target.style.background = "white";
        });
        
    }
    
}