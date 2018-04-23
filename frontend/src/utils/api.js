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

export const getPost = postId =>
  fetch(`${api}/posts/${postId}`, { headers }).then(response =>
    response.json()
  );
  
export const addPost = post =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(response => response.json())


export const addVoteToPost = (postId, option) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(response => response.json());

export const editPost = (postId, post) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(response => response.json());

export const deletePost = postId =>
  fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers
  });

// get all comments

export const getAllComments = postId =>
  fetch(`${api}/posts/${postId}/comments`, { headers }).then(response =>
    response.json()
  );


  export const addNewComment = comment =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }).then(response => response.json());

export const getComment = commentId =>
  fetch(`${api}/comments/${commentId}`, { headers }).then(response =>
    response.json()
  );

export const addVoteToComment = (commentId, option) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(response => response.json());

export const editComment = (commentId, comment) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }).then(response => response.json());

export const deleteComment = commentId =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers
  }).then(response => response.json());
