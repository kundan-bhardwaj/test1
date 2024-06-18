function questoogle(quesb) {
    let sp = quesb.id.split(' ')
    const qb = document.getElementById('qbucket')
    for (var i = 0;i < qb.children.length;i++){
        qb.children[i].style.backgroundColor = 'rgb(238, 238, 238)'
    }
    quesb.style.backgroundColor = 'rgba(0, 72, 255, 0.219)'
    const ques = document.getElementById('q '+sp[1])
    const cont = document.getElementById('qcont')
    for (var i = 0;i<cont.children.length;i++){
        cont.children[i].style.display = 'none'
    }
    ques.style.display = 'flex'
}

function next(ele,quesno) {
    const bx = document.getElementById('b '+(quesno+1))
    if (bx){
        questoogle(bx)
    }
}

function prev(ele,quesno) {
    const bx = document.getElementById('b '+(quesno-1))
    if (bx){
        questoogle(bx)
    }
}