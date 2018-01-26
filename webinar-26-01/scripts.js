// const link = document.querySelector('.nav-link');

// link.setAttribute('target', '_blank');

// console.log(
//   link.getAttribute('href')
// );

// console.log(
//   link.href
// );

// inline стили!!!
// link.style.backgroundColor = 'red';

// const navLinks = document.querySelectorAll('.nav-link');

// link.addEventListener('click', function() {
// const hasClass = link.classList.contains('nav-link--active');

// if (hasClass) {
//   link.classList.remove('nav-link--active');
// } else {
//   link.classList.add('nav-link--active');
// }

//   link.classList.toggle('nav-link--active');
// });

// const links = document.querySelectorAll('.nav-link');
// console.log('links: ', links);

// const nav = document.querySelector('.nav');

// console.log(nav.children);

// console.log(nav.innerHTML);

// console.log(nav.textContent);

// console.log(link.parentNode);

function createPost(title, text) {
  const post = document.createElement('div');
  post.classList.add('post');

  const postTitle = document.createElement('h2');
  postTitle.textContent = title;

  const postText = document.createElement('p');
  postText.textContent = text;

  post.append(postTitle, postText);

  return post;
}

function createPostAsString(title, text) {
  const post = `
    <div class="post">
      <h2>${title}</h2>
      <p>${text}</p>
    </div>
  `;

  return post;
}

const postfeed = document.querySelector('.postfeed');

// let htmlString = '';

// for (let i = 0; i < 1000; i += 1) {
//   htmlString += createPostAsString('title', 'text');
// }

// postfeed.insertAdjacentHTML('beforeend', htmlString);

const container = document.createElement('div');

const post = document.createElement('div');
post.classList.add('post');

const postTitle = document.createElement('h2');
postTitle.textContent = 'title';

const postText = document.createElement('p');
postText.textContent = 'text';

post.append(postTitle, postText);

for (let i = 0; i < 1000; i += 1) {
  const el = post.cloneNode(true);

  container.append(el);
}

postfeed.append(container);

// const post = createPostAsString('Post title', 'Post text');
// const postfeed = document.querySelector('.postfeed');

// postfeed.insertAdjacentHTML('beforeend', post);

// postfeed.append(post);

// postfeed.appendChild(post);
// postfeed.insertBefore(
//   post,
//   postfeed.firstElementChild
// );
