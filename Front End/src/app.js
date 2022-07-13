//  Create function that will handle the flow of the program

const renderBody = document.getElementById("RENDER-BODY");
let blogs;

async function onPageInit() {
   //First show like we are loading something
   renderBody.innerHTML = `<img src="https://thumbs.gfycat.com/ConventionalOblongFairybluebird-size_restricted.gif" /> `;
   await sleep(500);

   blogs = await fetch("https://localhost:7096/api/Posts").then((response) => {
      return response.json();
   });
   console.log(blogs);
   renderBody.innerHTML = "";
   renderBody.classList.add("flex-wrap");

   blogs.forEach((blog) => {
      renderBody.innerHTML += BlogCardView(blog);
   });
}

onPageInit();

function BlogCardView(blog) {
   var card = `
        <div class="max-w-[300px] m-4">
            <div class=" bg-white  mx-auto shadow-lg rounded-lg">
                <img class="rounded-lg" src="${blog.featuredImageUrl}" alt="" />
                <div class="py-4 px-8">
                    <h1 class=" mt-2 text-gray-900 font-bold text-2xl ">
                        ${blog.title} 
                    </h1>
                    <p class=" py-3 text-gray-600 leading-6">
                        ${blog.summary}
                    </p>
                    <div class="text-sm p-1">Written by: ${blog.author}</div>
                    <a type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick="showBlogDetails('${blog.id}')"    
                    >Expand</a>
                </div>
            </div>
        </div>
    `;
   return card;
}

// Write function to show the details of only one blog
async function showBlogDetails(id) {
   //First first off the request for the blog
   let blog = await fetch("https://localhost:7096/api/Posts/" + id).then(
      (response) => {
         return response.json();
      }
   );
   console.log(blog);
   //then unload the RENDER-BODY holder and show loader spinner
   renderBody.innerHTML = `<img src="https://thumbs.gfycat.com/ConventionalOblongFairybluebird-size_restricted.gif" /> `;
   await sleep(500);
   //fill a var with the html we'll want to inject
   let blogContent = BlogDetailView(blog);
   renderBody.innerHTML = blogContent;
}

function BlogDetailView(blog) {
   var details = `
                    <section class="w-full md:w-2/3 flex flex-col items-center px-3 container text-center rounded-lg">

                        <a type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        onClick="onPageInit()"    
                        >Show All Blogs</a>

                        <!-- Article Image -->
                        <div class="hover:opacity-75 text-center mt-10">
                            <img src="${
                               blog.featuredImageUrl
                            }" class="text-center object-cover">
                        </div>
                        
                        <article class=" flex flex-col w-full shadow my-4 align-content-center text-center    shadow-Project    ">
                            <div class="bg-white flex flex-col justify-start p-6">
                                <!--Blog Title-->
                                <div href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">
                                    ${blog.title}
                                </div>
                                <p class="text-sm pb-8">
                                    By <div class="font-semibold hover:text-gray-800" >
                                    ${blog.author}
                                    </div>
                                    , Published on: ${blog.updatedDate.substring(
                                       0,
                                       10
                                    )}
                                </p>
                                <hr>
                                <p class="mt-2 pb-3 align-items-center">
                                    ${blog.content}
                                </p>
                            </div>
                        </article>
                        <a type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        onClick="onPageInit()"    
                        >Show All Blogs</a>
                    </section>
    `;
   return details;
}
function sleep(ms) {
   return new Promise((resolve) => setTimeout(resolve, ms));
}
