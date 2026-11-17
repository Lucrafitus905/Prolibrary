//Carregamento dinâmico de página

const paramUrl = new URLSearchParams(window.location.search.replaceAll('-', '_'));
const getContent = paramUrl.get("content");

const pageHeader = document.getElementById("header")

const contentSpace = document.getElementById("content");

const pageContent = data[getContent];

if (pageContent) {
    document.title = 'Prolibrary - ' + pageContent.title;

    let headerContent = ``;

    headerContent += `<div>`;
    if (pageContent.img) {
        headerContent += `<img src="${pageContent.img}" alt="${pageContent.title + ' Logo'}"></img>`;
    } else {
        headerContent += `<img src="images/placeholder.png" alt="placeholder image"></img>`;
    };
    headerContent += `
            <h1>${pageContent.title}</h1>
        </div>
        <a href="index.html">Voltar</a>
    `;
    pageHeader.innerHTML = headerContent;

    const itemsContent = Object.values(pageContent.content);

    let htmlContent = ``;

    htmlContent += `<nav>`;

    itemsContent.forEach((content, index) => {
        htmlContent += `
            <span><a href="#${content.title.toLowerCase().replaceAll(' ', '-')}">${content.title}</a></span>
            `
    });
    htmlContent += `
    </nav>
    <main>
        <div>
    `;
    itemsContent.forEach((content, index) => {
        htmlContent += `
            <section>
                <h2 id="${itemsContent[index].title.toLowerCase().replaceAll(' ', '-')}">${itemsContent[index].title}</h2>
                <article>
                    ${itemsContent[index].content}
                </article>  
            </section>
            `
    });
    htmlContent += `
    </div>
        </main>
    `;
    contentSpace.innerHTML = htmlContent;
} else {
    pageHeader.innerHTML = `
    <h1>Página não encontrada!</h1>
    <a href="index.html">Voltar</a>
    `;
    contentSpace.innerHTML = `
    <main>
        <div>
            <section>
                <h2>Erro 404! Página não encontrada.</h2>
                <img src="images/placeholder.png" alt="placeholder" style="display: block; margin: 1.5rem auto; width: 30vw"></img>
                <article>
                    Parece que você encontrou um final.
                </article>
            </section>
        </div>
    </main>
    `;
};