

  
    (function(window,document,undefined){
   
        window.onload=init;
    
        function init(){
            let fullName=prompt("Luften adinizi girin: ")
            let greeting = document.querySelector("#greeting")
        
            greeting.innerHTML=`${greeting.innerHTML} <small style="color:red">${fullName}</small>`
        
        }
    })(window,document,undefined);
    