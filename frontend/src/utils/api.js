const api = 'http://localhost:3001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
};

// Categories
export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(response => response.json())
    .then(data => data.categories);

// Posts
export const getPostsByCategories = (category) =>
  fetch(`${api}/${category}/posts`, { headers }).then(response =>
    response.json()
  );

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers }).then(response => response.json());
