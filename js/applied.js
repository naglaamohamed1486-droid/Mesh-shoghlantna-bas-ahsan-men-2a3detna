document.addEventListener("DOMContentLoaded", () => {
    const jobContainer = document.getElementById("job-container");
    const countText = document.getElementById("job-count");

    const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

    if (countText) {
        countText.textContent = appliedJobs.length;
    }

    
    if (appliedJobs.length === 0) {
        jobContainer.innerHTML = `
            <div style="text-align:center; padding: 100px 0; color:#6b7280;">
                <p>You haven't applied for any jobs yet.</p>
                 
                <a href="search.html" style="
                display: inline-block;
                background-color: #2B3EEE;
                color: white;
                padding: 10px 20px;
                text-decoration: none;
                font-weight: 600;
                border-radius: 12px;
                margin-top: 15px;
                 ">Browse Jobs →</a>
                
            </div>`;
        return;
    }

    
    
    jobContainer.innerHTML = appliedJobs.reverse().map(job => `
        <div class="job-card">
            <div class="job-info">
                <img class="cover" src="${job.logo}" alt="${job.title}" />
                <div class="job-text">
                    <h3>${job.title}</h3>
                    <p>${job.company}</p>
                    <span>Applied ${job.date}</span>
                </div>
            </div>

            <div class="job-actions">
                <span class="status pending">🕒 ${job.status}</span>
                <button class="view-btn" onclick="window.location.href='jobDetails.html?id=${job.id}'">
                    View Job →
                </button>
            </div>
        </div>
    `).join('');
});