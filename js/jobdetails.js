const params = new URLSearchParams(window.location.search);
const jobId = params.get("id");
fetch("js/jobs.json").then(res => res.json()).then(data => {
    const job = data.find(j => j.id == jobId);
    if (!job) {
        document.body.innerHTML = "<h1> Job not found</h1>";
        return;   
  }
  document.getElementById("cover").src=job.Cover
    document.getElementById("title").textContent = job.title;
    document.getElementById("company").textContent = job.company;
    document.getElementById("location").textContent = job.location;
    document.getElementById("time").textContent = job.time;
    document.getElementById("salary").textContent = job.salary;
    document.getElementById("type").textContent = job.type;
    document.getElementById("exp").textContent = job.exp;
    document.getElementById("description").textContent = job.description;
    document.getElementById("companyLocation").textContent = job.companyLocation;
    document.getElementById("employees").textContent = job.employees;

const tagsContainer = document.getElementById("tags");
    job.tags.forEach(tag => {
      let li = document.createElement("li");
     
      li.textContent = tag;
      tagsContainer.appendChild(li);
    });

    const reqList = document.getElementById("required");
    job.required.forEach(req => {
      let li = document.createElement("li");
      li.textContent = req;
      reqList.appendChild(li);
    });

    const benList = document.getElementById("benefit");
    job.benefit.forEach(b => {
      let li = document.createElement("li");
      li.textContent = b;
      benList.appendChild(li);
    });

    const gallery = document.getElementById("gallery");

const track = document.createElement("div");
track.className = "slider-track";
gallery.appendChild(track);

job.gallery.forEach(img => {
  let div = document.createElement("div");
  div.className = "ph";
  let image = document.createElement("img");
  image.src = img;
  div.appendChild(image);
  track.appendChild(div);
});

// dots
const dotsContainer = document.getElementById("dots");
let current = 0;

job.gallery.forEach((_, i) => {
  let dot = document.createElement("div");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.addEventListener("click", () => goTo(i));
  dotsContainer.appendChild(dot);
});

function goTo(index) {
  current = index;
  track.style.transform = `translateX(-${current * 100}%)`;
  document.querySelectorAll(".dot").forEach((d, i) =>
    d.classList.toggle("active", i === current)
  );
}

document.getElementById("prev").addEventListener("click", () =>
  goTo(current > 0 ? current - 1 : job.gallery.length - 1)
);

document.getElementById("next").addEventListener("click", () =>
  goTo(current < job.gallery.length - 1 ? current + 1 : 0)
);

function applyJob(id) {
    window.location.href = `form.html?id=${job.id}`;
  }

  document.getElementById("apply").addEventListener("click", () => {
    applyJob(job.id);
});
  })