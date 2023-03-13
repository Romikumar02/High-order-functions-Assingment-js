// creating a url pattern
const urlpattern = /^https?:\/\/[\w\-\.]+[a-zA-Z]{2,}$/;

// getting url input from user
const url = prompt('enter a url')
// getting the status of url entered by user in console.
if(urlpattern.test(url)){
    console.log('valid url')
}else{
    console.log('invalid url')
}