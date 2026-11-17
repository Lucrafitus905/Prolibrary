//Carregamento dinâmico de página

const paramUrl = new URLSearchParams(window.location.search);
const getContent = paramUrl.get("content");
console.log(paramUrl + '\n' + getContent);

const pageHeader = document.getElementById("header")

const contentSpace = document.getElementById("content");

const pageContent = data[getContent];

if (pageContent) {

    //Corigir desaparecimento de tudo quando o conteúdo não for encontrado
    //Automatizar a página principal também

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

    const itemsNav = Object.values(pageContent.nav);
    const itemsContent = Object.values(pageContent.content);

    let htmlContent = ``;

    htmlContent += `<nav>`;

    itemsNav.forEach((content, index) => {
        htmlContent += `
            <span><a href="#${itemsNav[index].toLowerCase().replaceAll(' ', '')}">${itemsNav[index]}</a></span>
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
                <h2 id="${itemsContent[index].title.toLowerCase().replaceAll(' ', '')}">${itemsContent[index].title}</h2>
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
    contentSpace.innerHTML = `<h2>Erro 404! Página não encontrada.</h2>`
};

// Scroll do nav

const nav = document.querySelector('nav');

nav.addEventListener('wheel', (e) => {
    if (nav.scrollWidth > nav.clientWidth) {
        e.preventDefault();
        nav.scrollLeft += e.deltaY;
    }
}, {passive: false});