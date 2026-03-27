document.addEventListener('DOMContentLoaded', () => {

    const myAddedJobs = JSON.parse(localStorage.getItem('myJobs')) || [];
    
    
    const jobListContainer = document.getElementById('jobList');

    if (jobListContainer) {
        if (myAddedJobs.length === 0) {
            jobListContainer.innerHTML = "<p style='text-align:center; color:gray;'>No jobs posted yet.</p>";
            return;
        }

       
        jobListContainer.innerHTML = '';

        myAddedJobs.forEach(job => {
            
            const cardHtml = `
                <div class="job-card">
                    <div class="company-logo">
                        <img src="./assets/imgs/Software Engineer.jpeg" alt="Logo">
                    </div>

                    <div class="job-info">
                        <h3>${job.title}</h3>
                        <div class="job-details">
                            <span>${job.company}</span> • 
                            <span>${job.location || 'Remote'}</span> • 
                            <span>${job.salary || '$0'}</span>
                        </div>
                    </div>

                    <div class="tags">
                        <span class="badge">${job.type}</span>
                        
                    </div>

                    <div class="action-btns">
                        <button onclick="window.location.href='editjob.html?id=${job.id}'">
                             Edit
                        </button>
                        <button class="delete-btn" onclick="deleteJob(${job.id})">
                             Delete
                        </button>
                    </div>
                </div>
            `;

            
            jobListContainer.innerHTML += cardHtml;
        });
    }
});


function deleteJob(id) {
    
        let jobs = JSON.parse(localStorage.getItem('myJobs')) || [];
        jobs = jobs.filter(j => j.id !== id);
        localStorage.setItem('myJobs', JSON.stringify(jobs));
        location.reload(); 
    
}