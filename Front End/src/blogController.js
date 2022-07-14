/**
 * BLOG CONTROLLER: this handles the loading and unloading of components
 **/

async function showBlogDetails(id) {
   await showLoader();
   let blog = await getSingleBlog(id);
   renderBody.innerHTML = BlogDetailView(blog);
}

async function getAllBlogs() {
   await showLoader();
   blogs = await getBlogs();

   renderBody.innerHTML = "";
   renderBody.classList.add("flex-wrap");

   blogs.forEach((blog) => {
      renderBody.innerHTML += BlogCardView(blog);
   });
}
