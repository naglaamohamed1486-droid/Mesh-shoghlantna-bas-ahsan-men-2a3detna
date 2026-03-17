document.addEventListener("DOMContentLoaded", () => {

    const jobs= document.querySelectorAll(".job-card");
    const searchName  = document.getElementById("search");
    const searchLoc = document.getElementById("location");
    const searchType  = document.getElementById("Types");
    const searchLevel = document.getElementById("level");
    const searchTags = document.getElementById("Tags");

    function filterJobs() {
        const name= searchName.value.trim().toLowerCase();
        const loc= searchLoc.value.toLowerCase();
        const typeIn = searchType.value.toLowerCase();
        const levelIn= searchLevel.value.toLowerCase();
        const tagsIn= searchTags.value.toLowerCase();

        jobs.forEach(job => {
            const title= job.querySelector(".job-name").textContent.trim().toLowerCase();
            const location= job.querySelector(".location").textContent.trim().toLowerCase();
            const type= job.querySelector(".type").textContent.trim().toLowerCase();
            const level= job.querySelector(".level").textContent.trim().toLowerCase();
            const tag= job.querySelector(".tag").textContent.trim().toLowerCase();

            const match =
                (name === ""|| title.includes(name))&&
                (loc==="all locations"|| location.includes(loc))&&
                (typeIn==="all types"|| type.includes(typeIn))&&
                (levelIn==="all level"|| level.includes(levelIn))&&
                (tagsIn=== "all-tags"|| tag.includes(tagsIn));   

           if (match) {
            job.style.display = "block";
           }
           else {
        job.style.display = "none";
                }
        });
    }

    searchName.addEventListener("input",  filterJobs);
    searchLoc.addEventListener("change",  filterJobs);
    searchType.addEventListener("change", filterJobs);
    searchLevel.addEventListener("change",filterJobs);
    searchTags.addEventListener("change", filterJobs);

});