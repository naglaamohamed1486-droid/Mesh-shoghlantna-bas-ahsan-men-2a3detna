const container = document.querySelector(".job-list");
const jobcard = container.querySelector(".job-card");

console.log("Template found:", jobcard); 



fetch("js/jobs.json").then(res => res.json()).then(jobs => {

    console.log("Jobs loaded:", jobs);
    

    jobs.forEach(job => {
        const card = jobcard.cloneNode(true);
        card.style.display ="block"
        card.querySelector(".cover").src = job.Cover;
        card.querySelector(".job-name").textContent = job.title;
        card.querySelector(".company").textContent = job.company;
        card.querySelector(".type").textContent = job.type;
        card.querySelector(".location").textContent = ' '+job.location;
        card.querySelector(".salary").textContent = ' '+job.salary;
        
        const tagsContainer = card.querySelector(".tag");
        job.tags.forEach(tag => {
            const li = document.createElement("li");
            li.textContent = tag;
            tagsContainer.appendChild(li);
        });

        card.querySelector(".view a").setAttribute("href",`jobDetails.html?id=${job.id}`);

        container.appendChild(card);

    });
})
