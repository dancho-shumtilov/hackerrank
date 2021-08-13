function btnUpdate() {    
    const btn = document.getElementById('btn');
    let counter = 0;

    btn.onclick = function(e) {
        counter++;
        e.target.innerHTML = counter;
    }
}

btnUpdate()