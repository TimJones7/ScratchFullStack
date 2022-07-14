// BLOG SERVICE HANDLES CRUD WITH API ONLY

//HttpGET
async function getSingleBlog(id) {
   let blog = await fetch(BASEURL + id).then((response) => {
      return response.json();
   });
   return blog;
}

//HttpGET
async function getBlogs() {
   return await fetch(BASEURL).then((response) => {
      return response.json();
   });
}
