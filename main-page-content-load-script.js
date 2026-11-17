const navTag = document.getElementById("main-nav");

const mainTag = document.getElementById("main-content");
let mainTagContent = ``;

const contentList = Object.values(data);

contentList.forEach((content, index) => {
    const contentDetails = Object.values(content.content);
    navTag.innerHTML += `
    <span><a href="#${content.pageID.toLowerCase()}">${content.title}</a></span>
    `;

    mainTagContent += `
    <section id="${content.pageID.toLowerCase()}">
                <h2><a href="content.html?content=${content.pageID}">${content.title}</a></h2>
                <ul>
                
    `;
    contentDetails.forEach((insideContent, index) => {
        mainTagContent += `
        <li><a href="content.html?content=${content.pageID}#${insideContent.title.toLowerCase().replaceAll(' ', '-')}">${insideContent.title}</a></li>
        `
    });
    mainTagContent += `
        </ul>
            </section>
    `
});
mainTag.innerHTML = mainTagContent;