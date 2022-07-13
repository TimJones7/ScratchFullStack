//  Create function that will handle the flow of the program

//  Just to get things working, Let's start with, on page load,
//      make call to an api and get information back.

//  Create javascript objects that are html elements,
//  but when vars are assigned are populated with data

const renderBody = document.getElementById("RENDER-BODY");

async function onPageInit() {
   let blogs = await fetch("https://localhost:7096/api/Posts").then(
      (response) => {
         return response.json();
      }
   );
   console.log(blogs);
   renderBody.innerHTML = "";
   renderBody.classList.add("flex-wrap");

   blogs.forEach((blog) => {
      renderBody.innerHTML += BlogCard(blog);
   });
}
onPageInit();

function BlogCard(blog) {
   var card = `
        <div class="max-w-[300px] bg-gray-100 pt-20 m-4">
            <div class=" bg-white  mx-auto shadow-lg rounded-lg">
                <img class="rounded-lg" src="${blog.featuredImageUrl}" alt="" />
                <div class="py-4 px-8">
                    <h1 class=" mt-2 text-gray-900 font-bold text-2xl ">
                        ${blog.title} 
                    </h1>
                    <p class=" py-3 text-gray-600 leading-6">
                        ${blog.summary}
                    </p>
                    <div class="text-sm">Written by: ${blog.author}</div>
                </div>
            </div>
        </div>
    `;
   return card;
}
