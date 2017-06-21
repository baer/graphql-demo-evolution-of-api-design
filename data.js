const posts = {
  "234": {
    "id": 234,
    "author": "author/9",
    "categories": ["Software Engineering"],
    "publishDate": "2016/03/27 14:00",
    "summary": "...",
    "tags": ["GraphQl", "API"],
    "title": "Contemporary API Design"
  },
  "456": {
    "id": 456,
    "author": "author/4",
    "categories": ["Software Engineering"],
    "publishDate": "2016/03/27 14:00",
    "summary": "...",
    "tags": ["Redux", "redux-little-router"],
    "title": "Let The URL Do The Talking"
  },
  "17": {
    "id": 17,
    "author": "author/7",
    "categories": ["Software Engineering"],
    "publishDate": "2016/03/27 14:00",
    "summary": "...",
    "tags": ["HTTP/2", "Interlock"],
    "title": "HTTP/2 Server Push"
  }
};

const authors = {
  "9": {
    "id": 9,
    "name": "Eric Baer",
    "company": "Formidable"
  },
  "4": {
    "id": 4,
    "name": "Tyler Thompson",
    "company": "Formidable"
  },
  "7": {
    "id": 7,
    "name": "Dale Bustad",
    "company": "Formidable"
  }
};

module.exports = {
  getPost: (id) => posts[id],
  getPosts: () => Object.keys(posts).map(key => posts[key]),
  getAuthor: (id) => authors[id],
  getAuthors: () => Object.keys(authors).map(key => authors[key])
};
