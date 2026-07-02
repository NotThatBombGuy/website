const tags = [
    "Life",
    "Website",
    "Projects",
    "Other",
]

const blogentries = [
    {title: "First Update", desc: "The first official update! There were various things added, such as: Added 'About Me' section, updated various texts across site, updated bottom bar to NOT be illegal, and some other things that will be in the hidden section below. Overall pretty good start for the site. Next I'll be working on the section for links, progression with stuff mentioned in the hidden section, and maybe the Portfolio if I get to it. I'll have an email running for suggestions soon. Thank you for the support!", hidden: "Continuing from the updates, I also added a 'secret' page accessable through the home page somewhere. Only 4 secrets are currently added. I hope to have at least 10 by the end of this month.", date: "7/1/26"},
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
        <p class="blog-hidden-desc">${blogentry.hidden}</p>
    `;
    container.appendChild(blog);
});

