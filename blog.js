const tags = [
    "Life",
    "Website",
    "Projects",
    "Other",
]

const blogentries = [
    //{title: "test", date: "test", desc: "test", hashidden: true, hidden:"test", hasimg: true, imgSrc: "images/test.gif", imgAlt: "test",},
    {title: "Games, Development, and Images!", date: "7/2/26", desc: "Added even more stuff! As you probably already noticed, I updated the Home page to contain more things! As some backend stuff, I implimented the ability to toggle the hidden desc and I added a toggleable image preview (which is shown below!). I'm probably not gonna add a contact thing for a while cause it's super complicated to set up. Ok I've been scripting for 8 hours straight I'm taking a break.", hashidden: true, hidden:"I also added 2 more secrets on the secret page.", hasimg: true, imgSrc: "images/test.gif", imgAlt: "test",},
    {title: "First Update", desc: "The first official update! There were various things added, such as: Added 'About Me' section, updated various texts across site, updated bottom bar to NOT be illegal, and some other things that will be in the hidden section below. Overall pretty good start for the site. Next I'll be working on the section for links, progression with stuff mentioned in the hidden section, and maybe the Portfolio if I get to it. Mobile support is also coming soon. I'll have an email running for suggestions soon. Thank you for the support!", hashidden: true, hidden: "Continuing from the updates, I also added a 'secret' page accessable through the home page somewhere. Only 4 secrets are currently added. I hope to have at least 10 by the end of this month.", hasimg: false, date: "7/1/26"},
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

    ${blogentry.hashidden
        ? `<p class="blog-hidden-desc">${blogentry.hidden}</p>`
        : ""}

    ${blogentry.hasimg
        ? `<img class="blog-img" src="${blogentry.imgSrc}" alt="${blogentry.imgAlt}">`
        : ""}
`;
    container.appendChild(blog);
});


