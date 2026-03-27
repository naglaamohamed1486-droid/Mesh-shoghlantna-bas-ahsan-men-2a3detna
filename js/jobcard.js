const container = document.querySelector(".job-list");
const jobcard = container.querySelector(".job-card");

console.log("Template found:", jobcard);



// بيجيب الـ saved jobs من localStorage
function getSavedJobs() {
  return JSON.parse(localStorage.getItem("savedJobs") || "[]");
}

// بيحفظ الـ saved jobs في localStorage
function setSavedJobs(jobs) {
  localStorage.setItem("savedJobs", JSON.stringify(jobs));
}

// بيتحقق لو الـ job اتحفظت
function isJobSaved(jobId) {
  return getSavedJobs().some(j => j.id === jobId);
}

// بيضيف أو يشيل الـ job
function toggleSave(job) {
  let saved = getSavedJobs();
  const exists = saved.some(j => j.id === job.id);

  if (exists) {
    saved = saved.filter(j => j.id !== job.id); 
  } else {
    saved.push(job); 
  }

  setSavedJobs(saved);
  return !exists; 
}

/* 
   UPDATE SAVED COUNT في الـ profile
 */
function updateSavedCount() {
  const count = getSavedJobs().length;
  localStorage.setItem("saved", count);
}

//load jobs from JSON

fetch("js/jobs.json")
  .then(res => res.json())
  .then(jobs => {
    console.log("Jobs loaded:", jobs);

    jobs.forEach(job => {
      const card = jobcard.cloneNode(true);
      card.style.display = "block";
      card.querySelector(".cover").src = job.Cover;
      card.querySelector(".job-name").textContent = job.title;
      card.querySelector(".company").textContent = job.company;
      card.querySelector(".type").textContent = job.type;
      card.querySelector(".location").textContent = job.location;
      card.querySelector(".salary").textContent = job.salary;
      card.querySelector(".timestamp").textContent = job.time;

      
      const tagsContainer = card.querySelector(".tag");
      job.tags.forEach(tag => {
        const li = document.createElement("li");
        li.textContent = tag;
        tagsContainer.appendChild(li);
      });

      
      card.querySelector(".view a").setAttribute("href", `jobDetails.html?id=${job.id}`);

     
      const saveBtn = card.querySelector(".saved");

      
      if (isJobSaved(job.id)) {
        saveBtn.style.color = "#EF4343";
        saveBtn.querySelector("path").setAttribute("fill", "#EF4343");
      }

      saveBtn.addEventListener("click", () => {
        const nowSaved = toggleSave(job);
        updateSavedCount();

       
        if (nowSaved) {
          saveBtn.querySelector("path").setAttribute("fill", "#EF4343");
          showToast("❤️ Job saved!");
        } else {
          saveBtn.querySelector("path").setAttribute("fill", "none");
          showToast("💔 Job removed!");
        }
      });

      container.appendChild(card);
    });
  });

//toast function

function showToast(msg) {
  const toast = document.createElement("div");
  toast.textContent = msg;
  toast.style.cssText = `
    position: fixed; bottom: 2rem; right: 2rem;
    background: #0F1729; color: #fff;
    padding: 0.75rem 1.25rem; border-radius: 0.75rem;
    font-size: 0.88rem; font-weight: 600;
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    z-index: 999;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}
