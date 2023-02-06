const library = [
    {
        id:1,
        name:'Anonimo',
        photo:'https://unsplash.it/300/300?image=15',
        data:'(11/01/2022)',
        testo:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image:'https://unsplash.it/600/300?image=171',
        likes:80,
    },
    {
        id:2,
        name:'Anonimo2',
        photo:'https://unsplash.it/300/300?image=15',
        data:'(11/01/2022)',
        testo:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image:'https://unsplash.it/600/300?image=171',
        likes:40,
    },
    {
        id:3,
        name:'Anonimo3',
        photo:'https://unsplash.it/300/300?image=15',
        data:'(11/01/2022)',
        testo:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image:'https://unsplash.it/600/300?image=171',
        likes:65,
    },
] 
const postContainer = document.querySelector('.posts-list');
function createPost (container , librayList){
    for(let i=0 ;i<librayList.length ; i++){
        const post=librayList[i];
        container.innerHTML+=`
                <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${post.photo}" alt="${post.name}">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${post.name}</div>
                            <div class="post-meta__time">${post.data}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${post.testo}</div>
                <div class="post__image">
                    <img src="${post.image}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#${post.id}" data-postid="${post.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div> `
    }
}

createPost(postContainer,library);
let postButton = document.querySelectorAll('.like-button')
for(let i=0;i<postButton.length;i++){
    let likeList=[];
    postButton[i].addEventListener('click',function(){
       let counter=document.getElementById(`like-counter-${library[i].id}`);
       library[i].likes++;
       counter.innerHTML=library[i].likes;
       postButton[i].classList.toggle('like-button--liked')
       likeList.push(postButton[i].id);
    })
}