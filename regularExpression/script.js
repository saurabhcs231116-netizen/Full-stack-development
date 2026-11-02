// case1


const s= /saurabh/;

console.log(s.test("saurabh"));
console.log(s.test("patel"));


// case2    i-flag

const x=/java/i;
console.log(x.test("java"));
console.log(x.test("JAVA"));
console.log(x.test("Java"));
console.log(x.test("javaSctript"));


// case3

console.log("case 3");

const a = /./;
console.log(a.test(0));
console.log(a.test("saurabh"));
console.log(a.test(";"));

const b = /d/;
console.log("saurabh");


// case4 charset
console.log("case 4")

const vovel = /[aeiou]/;

console.log(vovel.test("saurabh"));
console.log(vovel.test("rdhp"));


// case 5 quantifier 
console.log("case 5");


const d=/\d{4}/;

console.log(d.test(23));
console.log(d.test(202222222222)); // 3 digit me false
console.log(d.test(2367876567834));


console.log("exatct 4 ko check");

const f=/^\d{4}$/;

console.log(f.test("4444")); // exacyt 4 digit check karega
console.log(f.test("45678"));
console.log(f.test("56789"));


// case6
console.log("case 6");


const c=/^\d+$/;

console.log(c.test("3456789"));
console.log(c.test("45676ytg67"));
console.log(c.test("3456789"));


// case 7

console.log("case 7");

const m = /^[A-Z]{4}$/;

console.log(m.test("SAUR"));
console.log(m.test("SAUR "));
console.log(m.test("SAU"));



// =====================================================--------------------------validating user name ---------------------------------------------------------=====================================================

console.log("Validate user");

const username=/^[A-Za-z0-9]{4,13}$/;

console.log(username.test("Saurabh1847"));
console.log(username.test("sakshi2@"));




// ============================================ validating E-mail ===================================================

console.log("Email validating ");

const e_validate=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                

console.log(e_validate.test("student@example.com"));

console.log(e_validate.test("saurabhgmai.com"));

console.log(e_validate.test("saurabh@gmaicom"));




//====================================================validating Phone =========================================
console.log("phone validating");


const phone =/^[\d]{10}$/;

console.log(phone.test("9329621374"));




// ===================================Final user Validation ====================================================

function nameuser(){
    const username = document.getElementById("name").value;

    if(/^[A-Za-z0-9]{4,10}$/.test(username)){
        console.log("valid");
        
    }else{
        console.log("invalid");
        
    }
}




