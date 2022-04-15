

//let h2=document.getElementsByTagName('h2');

(function(window,document,undefined){
   
    window.onload=init;

    function init(){
        let title = document.getElementById('title')
        title.innerHTML="Degisen Bilgi"

        console.log(title.innerHTML)

        let link = document.querySelector('#kodluyoruzlink')
        link.innerHTML += " degisti"
        link.style.color='red'
        link.classList.add('btn')

        console.log(link)
    }
})(window,document,undefined);







