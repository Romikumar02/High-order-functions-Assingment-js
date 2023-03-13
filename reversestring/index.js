const input = 'romikumar'
function reversestringafterdelay(str,delay){
    // use of settimeout to delay  the function
    setTimeout(()=>{
        // reverse the string
        const reversed = str.split("").reverse().join("")
        console.log(reversed);

    },delay);

}
// call the reversestringafterdelay
reversestringafterdelay(input,2000)


