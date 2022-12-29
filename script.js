var indexValue = 0;
         function slideShow(){
           setTimeout(slideShow, 1000);
           var x;
        //    const cont = document.getElementById('slide1');
           const img = document.getElementsByClassName('slide');
           for(x = 0; x < img.length; x++){
             img[x].style.display = "none";
           }
           indexValue++;
           if(indexValue > img.length){indexValue = 1}
           img[indexValue -1].style.display = "block";
         }
         slideShow();





var display = document.getElementById('display');
var clear = display.getElementsByTagName('span')
num  = document.getElementById('num').value
function clear1(){
      alert(num);
}