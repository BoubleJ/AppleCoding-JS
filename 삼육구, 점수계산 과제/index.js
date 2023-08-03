let num = 0


document.getElementById('btn').addEventListener('click', function(){
    num = num + 1
    document.getElementById('num').textContent = num
    let clap = '짝'
  let result = 0
   if (String(num).includes('3') || String(num).includes('6') || String(num).includes('9')) {
    for (let i =0; i<String(num).length; i++) {
        if (String(num)[i] == '3') {
            result = result + 1
        } else if (String(num)[i] == '6') {
            result = result + 1
    
    }  else if (String(num)[i] == '9') {
        result = result + 1
} 

}
document.getElementById('num').textContent = clap.repeat(result)
}})
        







let a = document.getElementById('score1')
let b =  document.getElementById('score2')
 function named() {
  if (Number(a.value) >100 || Number(a.value) < 0 ||  Number(b.value) >100  ||  Number(b.value) <0) {
    alert('장난하지마!')
}
  else if  (Number(a.value) + Number(b.value) >= 120 && a.value >= 40 && b.value >= 40) {
    document.getElementById('word').innerHTML = '합격'
  } 
  else {
    document.getElementById('word').innerHTML = '불합격'
  }
 }





  
    
       
    





