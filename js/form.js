const params = new URLSearchParams(window.location.search);
const jobId = params.get("id");
fetch("js/jobs.json").then(res => res.json()).then(data => {
    const job = data.find(j => j.id == jobId);
    if (!job) {
        document.body.innerHTML = "<h1> Job not found</h1>";
        return;
    }
    document.getElementById("title").textContent = job.title;
    document.getElementById("company").textContent = job.company;
    document.getElementById("type").textContent = job.type;
});
