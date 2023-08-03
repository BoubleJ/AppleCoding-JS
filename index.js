document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', function () {
    document.getElementsByClassName('list-group')[0].classList.toggle('show')
})

document.getElementById('modal_btn').addEventListener('click', function (){
    document.getElementById("black_bg").style.display = 'block';
})



 



document.getElementById('formtag').addEventListener('submit', function(e){
    let a = document.getElementById('idinput')
    let b = document.getElementById('passinput')      

    if (a.value.length  == 0) {
        alert('id를 입력해주세요.')
        e.preventDefault();
    } else if (b.value.length == 0) {
        alert('password를 입력해주세요.') 
        e.preventDefault()
    } else if (b.value.length < 6) {
        alert('비밀번호가 너무 짧습니다. 6자 이상 작성하세요')
        e.preventDefault()
    }
})




let count = 0
document.getElementById('darkmode').addEventListener('click', function(){
    if (count % 2) {
        for (let i =0; i<document.querySelectorAll('#list').length; i++) {
            document.querySelectorAll('#list')[i].style.color = 'black'
            document.querySelectorAll('#list')[i].style.background = 'white'
        }
        count++
     
    } else {
        for (let i =0; i<document.querySelectorAll('#list').length; i++) {
            document.querySelectorAll('#list')[i].style.color = 'white'
            document.querySelectorAll('#list')[i].style.background = 'black'
        }

        count++
     

    }
})


