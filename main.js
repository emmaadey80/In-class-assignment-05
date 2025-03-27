import { getUsers } from './api.js';

function displayUsers() {
    const container = document.getElementById('postContainer');

    getUsers()
    .then(users => {
        users.slice(0,5) .forEach(post => {
            const div = document.createElement('div');
            div.innerHTML = `<h3>${post.name}</h3><p>${post.email}</p><p>${post.phone}</p>`;
            container.appendChild(div);
        });
    })
    .catch (err => {
        container.innerHTML = `<p style="color:red;">Failed to load posts:
        ${err.message}</p>`;
    });
}

displayUsers();