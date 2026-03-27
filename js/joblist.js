
const jobImages = {
    'frontend': './assets/imgs/frontend.jpg',
    'content writer': './assets/imgs/content writer.jpg',
    'cooking': './assets/imgs/cooking.jpg',
    'customer support': './assets/imgs/customer support.jpg',
    'data scientist': './assets/imgs/data-scientist.jpg',
    'financial': './assets/imgs/financial.jpg',
    'graphic': './assets/imgs/graphic-design.webp',
    'photographer': './assets/imgs/photographer.jpg',
    'engineer': './assets/imgs/Software Engineer.jpeg',
    'translator': './assets/imgs/translator.jpg',
    'ui': './assets/imgs/ui.jpg',
    'civil': './assets/imgs/civil.jpg',
    'default': './assets/imgs/empty.jpg' 
};

function getJobImage(title) {
    if (!title) return jobImages.default;
    const lowerTitle = title.toLowerCase();
    for (const key in jobImages) {
        if (lowerTitle.includes(key) && key !== 'default') {
            return jobImages[key];
        }
    }
    return jobImages.default;
}


document.addEventListener('DOMContentLoaded', () => {
    const myAddedJobs = JSON.parse(localStorage.getItem('myJobs')) || [];
    const jobListContainer = document.getElementById('jobList');

    if (jobListContainer) {
        jobListContainer.innerHTML = ''; 
        myAddedJobs.forEach(job => {
            const cardHtml = `
                <div class="job-card">
                    <div class="company-logo">
                        <img src="${getJobImage(job.title)}" alt="${job.title}">
                    </div>
                    
                    <div class="job-info">
                        <h3>${job.title}</h3>
                        <div class="job-details">
                            <span>${job.company}</span> • 
                            <span>${job.type}</span> • 
                            <span>$${job.salary}</span>
                        </div>
                    </div>

                    <div class="tags">
                        <span class="badge">${job.employment || 'Full-time'}</span>
                    </div>

                    <div class="action-btns">
                        <button class="edit-btn" onclick="window.location.href='editjob.html?id=${job.id}'">Edit</button>
                        <button class="delete-btn" onclick="deleteJob(${job.id})">Delete</button>
                    </div>
                </div>
            `;
            jobListContainer.innerHTML += cardHtml;
        });
    }
});


function deleteJob(id) {
    if (confirm('Are you sure you want to delete this job?')) {
        let jobs = JSON.parse(localStorage.getItem('myJobs')) || [];
        jobs = jobs.filter(job => job.id !== id);
        localStorage.setItem('myJobs', JSON.stringify(jobs));
        location.reload(); 
    }
}