function play(){
    let bar1 = document.getElementById('bar1');
    var bar2 = document.getElementById("bar2");
    var bar3 = document.getElementById("bar3");
    var bar4 = document.getElementById("bar4");
    var bar5 = document.getElementById("bar5");
    var bar6 = document.getElementById("bar6");
    

    var number=Math.random()*300;
    var num=Math.round(number);
    console.log(num);
  
    bar1.style.backgroundColor='red';
    bar1.style.height=num+'px';
    bar1.classList.add("bar");
    bar2.style.backgroundColor='red';
    bar3.style.backgroundColor='red';
    bar4.style.backgroundColor='red';
    bar5.style.backgroundColor='red';
    bar6.style.backgroundColor='red';
   

}