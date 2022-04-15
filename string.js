let email="yusufi.candan@gmail.com"
let firstName="yusuf"
let lastName="CANDAN"


// uzunluk bilgisini bulmak icin kullanildi
console.log(email.length)

//ilk karakteri bulmak icin kullanildi
console.log(firstName[0])
console.log(firstName.charAt(0))

//buyuk harf / kucuk harf :
firstName=firstName.toUpperCase()
console.log(firstName)

firstName=firstName.toLowerCase()
console.log(firstName)

// String icinde istedigimiz bilgiyi aramak ve yerini bulmak icin kullanildi
console.log(email.search("adssad"))

// belli bir yere kadar al -> slice: (domain bilgisi)

let DOMAIN=email.slice(email.search("@"))
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0,DOMAIN.indexOf('.'))  // sadece gmail kismini kesmek icin kullanildi
    )

// bilgiyi degistirmek icin - >
email=email.replace('gmail.com','kodluyoruz.org')
console.log(email)

//icerisinde istedigimiz bilgi varmı diye sorgulamak 
console.log(
    email.includes('@') + "\n" +
    email.endsWith('kodluyoruz.org')
    )

// ilk harfleri buyuk almak -> 
let fullName=`${firstName[0].toUpperCase()}${firstName.slice(1)}${lastName[0].toUpperCase()}${lastName.slice(1)}`

console.log(fullName + "\n")

// iki string bilgiyi birlestirme
let fullName1=""
console.log(fullName1.concat(firstName,lastName))

// belirtilen karaterin unicode degerini alma 
console.log("'" +fullName.charAt(1) + "' Unicode: " +  fullName.charCodeAt(1))