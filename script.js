const contan = document.querySelector('.content')

drow()

function drow() {
    for (let i = 0; i < 9; i++) {
        let tic = document.createElement('div')
        tic.classList = "tic";
        contan.appendChild(tic);
        // tic.textContent = i
        // tic.innerHTML = "<h2>" + i + "</h2>"
        tic.id = i;
        // tic.textContent
        // tic.addEventListener

    }
    playuser()

}


function playuser() {
    const tick = document.querySelectorAll('.tic')
    tick.forEach(function(element) {
        element.addEventListener("click", function() {
            element.textContent = "X"
            element.className = "ticy"
                // alert(index)
            result();


        })

    })
}

function playcom() {
    const tick = document.querySelectorAll('.tic')
        //alert(tick.length)
    let ind = getRandomInt(tick.length);
    //alert(ind)
    setTimeout(function() {
        tick[ind].textContent = "O"
    }, 600);
    tick[ind].className = "ticy"
}

function result() {
    const ticx = [...document.querySelectorAll('.ticy')].filter((el) => el.textContent == "X");
    const tico = [...document.querySelectorAll('.ticy')].filter((el) => el.textContent == "O");
    let xid = ""
    let oid = ""
    ticx.forEach(el => xid += el.id)
    tico.forEach(el => oid += el.id)
        // alert(xid)
    if (tico.length > 2 || ticx.length > 2) {
        if (xid.match(/012|345|678|036|147|258|048|246/g)) {
            distroy(0)
        }
        if (oid.match(/012|345|678|036|147|258|048|246/g)) {
            distroy(1)
        }
    }
    playcom()
}

function distroy(num) {
    const foo = document.querySelector('.foo')
    const tick = document.querySelectorAll('.tic')
    const ticky = document.querySelectorAll('.ticy')


    if (num == 0) {
        foo.innerHTML = "<h2> You Won</h2>"
    } else {
        foo.innerHTML = "<h2> You Lose</h2>"
    }
    tick.forEach((element) => contan.removeChild(element));
    ticky.forEach((element) => contan.removeChild(element));
    drow()
}





function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}