const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export function getUsers() {
    return fetch(BASE_URL)
    .then(response => {
        if(!response.ok) {
            throw new Error(`HTTP ERROR: ${response.status}`)
        }
        return response.json();
    
    })
    .catch(error => {
        console.error("Fetch failed", error.message)
        throw error;
    });
} 
