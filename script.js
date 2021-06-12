var block = document.querySelectorAll('.block'),
    inp = document.querySelectorAll('.input-block'),
    active = document.querySelectorAll('.active'),
    amount = active.length

var sheetAmount = 3


var controller = document.querySelectorAll('.controller-block')

function updateBlock(b) {
    for (let i = 0; i < b; i++) {
        block = document.querySelectorAll('.block')
        console.log('updated');
        if (block.length == b) break;
    }
    let bool = true;
    if (block.length == b) {
        bool = true;
    }else{
        bool = false
    }
    console.log(block);

    let hoverItem = hover(block,bool);

    if (hoverItem) {
        console.log(1);
        hover(block,bool)
    }

}
function hover(blockForEvent,bool) {
    for (let i = 0; i < blockForEvent.length; i++) {
        blockForEvent[i].addEventListener('mouseover', function () {
    
            this.classList.add('active')
            active = document.querySelectorAll('.active')
            amount = active.length.toString()
            inp[0].innerHTML = amount
            console.log(amount);
        })
    }
    return true;
}
hover(block,true)
function controllerShow() {
    sheetAmount = sheetAmount.toString()

    controller[0].innerHTML = sheetAmount
}





function remove5() {
    sheetAmount = Number(sheetAmount)
    if (sheetAmount > 5) {
        sheetAmount -= 5
        if (sheetAmount < 1) {
            sheetAmount = 1
            alert('Error,you can not set less than 1')
        }
    } else {
        alert('Error,you can not set less than 1')
        sheetAmount = 1
    }
    console.log(sheetAmount);
    controllerShow()
    columnsRowsRemove()
}
function remove1() {
    sheetAmount = Number(sheetAmount)
    if (sheetAmount > 1) {
        sheetAmount -= 1
        if (sheetAmount < 1) {
            sheetAmount = 1
            alert('Error,you can not set less than 1')
        }
    } else {
        alert('Error,you can not set less than 1')
        sheetAmount = 1
    }
    console.log(sheetAmount);
    controllerShow()
    columnsRowsRemove()
}
function add5() {
    sheetAmount = Number(sheetAmount)
    if (sheetAmount < 40) {
        sheetAmount += 5
        if (sheetAmount > 40) {
            sheetAmount = 40
            alert('Error,you can not set more than 40')
        }
    } else {
        alert('Error,you can not set more than 40')
        sheetAmount = 40
    }
    console.log(sheetAmount);
    controllerShow()
    columnsRowsAdd()
}
function add1() {
    sheetAmount = Number(sheetAmount)
    if (sheetAmount < 40) {
        sheetAmount += 1
        if (sheetAmount > 40) {
            sheetAmount = 40
            alert('Error,you can not set more than 40')
        }
    } else {
        alert('Error,you can not set more than 40')
        sheetAmount = 40
    }
    console.log(sheetAmount);
    controllerShow()
    columnsRowsAdd()
}



function columnsRowsAdd() {
    var blockAmount = sheetAmount ** 2,
        howMuchAdd = blockAmount - block.length

    console.log('creating ' + howMuchAdd);
    for (let i = 0; i < howMuchAdd; i++) {
        createBlock()
    }


    sheetAmount = sheetAmount.toString()
    document.querySelector('.wrapper').style.gridTemplateColumns = 'repeat(' + sheetAmount + ', 1fr)'
    document.querySelector('.wrapper').style.gridTemplateRows = 'repeat(' + sheetAmount + ', 1fr)'
    updateBlock(blockAmount)
}


function columnsRowsRemove() {
    var blockAmount = sheetAmount ** 2,
        howMuchRemove = block.length - blockAmount

    console.log('deleting ' + howMuchRemove);

    removeBlock(howMuchRemove)



    sheetAmount = sheetAmount.toString()
    document.querySelector('.wrapper').style.gridTemplateColumns = 'repeat(' + sheetAmount + ', 1fr)'
    document.querySelector('.wrapper').style.gridTemplateRows = 'repeat(' + sheetAmount + ', 1fr)'
    updateBlock(blockAmount)
}

function createBlock() {
    var sheetBlock = document.createElement("div")
    document.querySelector('.wrapper').appendChild(sheetBlock)
    sheetBlock.className = 'block'

}

function removeBlock(howMuchRemove){
    let item = document.querySelectorAll('.block')

    for (let i = 0; i < howMuchRemove; i++) {
        item[i].parentNode.removeChild(item[i])
        
    }

}