var modal = document.querySelector("#myModal");//modal adında bir değişken oluşturup myModal ıdimizi seçtik

var modalBtn = document.querySelector("#modalBtn");//modalBtn adında bir değişken oluşturup modalBtn adında idimizi seçtik

var closeBtn = document.querySelector("#close");//closeBtn adında bir değişken oluşturup close adındaki idimizi seçtik

modalBtn.onclick = function() { //butona tıkladığında ffonksiyonu aç
    modal.style.display = "block";//fonsiyonda şu işlemi yapıyor display none özelliğini block e çeviriypor
}//kapaparantez

closeBtn.onclick = function() {//aynı
    modal.style.display = "none";//aynı
}//kapa parantez

window.onclick = function(event) {//boşlukta herhangi bir yere basınca kapat
    
    if (event.target == modal){//aynı
           modal.style.display = "none";//aynı
        }//aynı
}//aynı