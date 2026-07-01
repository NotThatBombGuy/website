const blogentries = [
    {title: "test", desc: "test", date: "1/1/26"},
]

const container = document.querySelector(".blog-container")

blogentries.forEach(function (blogentry) {
    const blog = document.createElement("div");
    blog.className = "blog-entry";
    blog.innerHTML = `
        <div class="blog-entry-header">
            <h2 class="blog-title">${blogentry.title}</h2>
            <h3 class="blog-date">${blogentry.date}</h3>
        </div>
        <p class="blog-desc">${blogentry.desc}</p>
    `;
    container.appendChild(blog);
});

