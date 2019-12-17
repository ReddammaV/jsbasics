console.log(location);
document.write('<div class="container">');
document.write('My Location is ' + location.href);

function setLocation(){
    location.href = "https://www.classleskillnet.com/site/home";
}

// assign() - To assign the url (if you click back button it will open prev url)
function assign(){
    location.assign("https://www.google.com");
}

// reload() - To reload the page
function reload(){
    location.reload();
}

// replace() - To replace the url (which means if you click back button it not open prev url)
function replace(){
    location.replace("https://www.google.com");
}



document.write('</div>');