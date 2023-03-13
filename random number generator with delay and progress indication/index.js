// define the delay in milliseconds
let delay = 3000;

// Define the function to generate a random number after a delay
function generaterandomnumberafteradelay(delay){
    setTimeout(()=>{
        const randomnumber = Math.floor(Math.random()*10) +1;
        console.log(`the random number is: ${randomnumber}`)
    },delay)
}
// function to display a message every second indicating the time remaining
function countdown(delay){
    let remaining = delay/1000;
    const intervalid = setInterval(() => {
        console.log(`Generating a random number in ${remaining}`)
        remaining--;
        if(remaining===0){
            clearInterval(intervalid);
            generaterandomnumberafteradelay(delay);
        }
        
    }, 1000);

}
// call the countdown function to display the message every second
countdown(delay);