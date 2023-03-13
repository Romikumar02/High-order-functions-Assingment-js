// linkedinUrl Pattern 
const linkedinUrlpattern= /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
const url = prompt("please enter the linkedin vaild user url id: ")
// getting the response of user in console
if(linkedinUrlpattern.test(url)){
    console.log(`The URL "${url}" is a valid LinkedIn profile URL.`)

}else{
    console.log(`The URL "${url}" is not a valid LinkedIn profile URL.`);
}
