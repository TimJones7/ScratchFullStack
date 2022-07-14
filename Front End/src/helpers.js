function sleep(ms) {
   return new Promise((resolve) => setTimeout(resolve, ms));
}

async function showLoader(){
    //then unload the RENDER-BODY holder and show loader spinner
    renderBody.innerHTML = `<img src="https://thumbs.gfycat.com/ConventionalOblongFairybluebird-size_restricted.gif" /> `;
    await sleep(500);
}