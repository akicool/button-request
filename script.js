const postFetch =  document.querySelector('#posts');
const photoFetch =  document.querySelector('#photos');
const userFetch =  document.querySelector('#users');
const albumFetch =  document.querySelector('#albums');
const commentFetch =  document.querySelector('#comments');

async function getRequestPosts() {
    let requestPosts = await fetch('https://jsonplaceholder.typicode.com' + '/posts');
    let contentPosts = await requestPosts.json();
    //console.log(contentPosts[0]['title']);
    postFetch.textContent = contentPosts[0]['title']
}

async function getRequestPhotos() {
    let requestPhotos = await fetch('https://jsonplaceholder.typicode.com' + '/photos');
    let contentPhotos = await requestPhotos.json();
    //console.log(contentPhotos[0]['title']);
    photoFetch.textContent = contentPhotos[0]['title']
}

async function getRequestUsers() {
    let requestUsers = await fetch('https://jsonplaceholder.typicode.com' + '/users');
    let contentUsers = await requestUsers.json();
    //console.log(contentUsers[2]['username']);
    userFetch.textContent = contentUsers[2]['username']
}

async function getRequestAlbums() {
    let requestAlbums = await fetch('https://jsonplaceholder.typicode.com' + '/albums');
    let contentAlbums = await requestAlbums.json();
    //console.log(contentAlbums[0]['title']);
    albumFetch.textContent = contentAlbums[0]['title']
}

async function getRequestComments() {;
    let requestComments = await fetch('https://jsonplaceholder.typicode.com' + '/comments');
    let contentComments = await requestComments.json();
    //console.log(contentComments[0]['name']);
    commentFetch.textContent = contentComments[0]['name']
}


const getRequestItem = document.querySelectorAll('.get-request__item');
const postRequest = document.querySelector('.post-request');
const postRequestItem = document.querySelectorAll('.post-request__item');
const btnClear = document.querySelector('.btn--clear');

for (let i = 0; i < getRequestItem.length; i++) {
    getRequestItem[i].addEventListener('click', function() {
        postRequestItem[i].classList.toggle('display');
        postRequest.classList.add('active');
    })
}
for (let i = 0; i < postRequestItem.length; i++) {
    btnClear.addEventListener('click', function() {
        postRequestItem[i].classList.remove('display');
        postRequest.classList.remove('active');
    });
}

