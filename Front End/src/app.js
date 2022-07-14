
const BASEURL = "https://localhost:7096/api/Posts/";
const renderBody = document.getElementById("RENDER-BODY");
let blogs;

async function onAppInit() {
    getAllBlogs();
}

onAppInit();