

let username= "yusuf"
const DOMAIN = "yusuficandan.com"

let email= username + "@" + DOMAIN
console.log("console.log = Merhaba", username, "sitemize hosgeldin", "mail adresin: ", email )


let info=`template_literals = Merhaba ${username} sitemize hosgeldin.. mail adresin: ${email}

mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2+3)*10} TL
gunun saat bilgisi: ${new Date().getHours()}

kisa isminiz: ${username[0]}.
`

console.log(info)
