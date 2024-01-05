tst = new Array();

function test() {
    t = tst.length;
    const n = 1_000_000;
    
    if(t === 11) {
        document.getElementById("btn-10").disabled = true;
    }
    
    var start = Date.now();
    console.log(`\nJS: Counting ${countPrime(n)} Prime numbers`);
    var end = Date.now() - start;
    
    console.log(` took ${(end / 1000).toFixed(3)} seconds.`);
    
    document.getElementById(`tst-btn-${t}`).innerText=(`${(end / 1000).toFixed(3)} s`);
    document.getElementById(`tst-btn-${t}`).style.color="Green";
    
    tst.push(end / 1000)
    
    var avr = 0
    for (let i = 0; i < tst.length; i++){
        avr = avr + tst[i];
    }
    console.log(tst);
    console.log("sum: ",avr, "ave: ", avr / tst.length );

    document.getElementById("time10").innerText=(`${(avr / (tst.length) ).toFixed(3)} Seconds`);
    document.getElementById("tst-btn-11").focus();
}


function reset(){
    location.reload();
}


function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}


function countPrime(n) {
    let p = 0, i = 0;
    while (p < n) {
        if (isPrime(i)) {
            p++;
        }
        i++;
    }
    return p;
}
