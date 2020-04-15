//Module Purpose: HTML representation of a single article     
//Author: Kristen Howton

export const Article = articleObject => {
    return `
        <article class="article">
            <h3>News Title: ${articleObject.title}</h3>
            <section>Synopsis: ${articleObject.synopsis}</section>
            <section>URL: ${articleObject.url}</section>
            <section>Date: ${articleObject.date}</section>
        </article>
    `
}