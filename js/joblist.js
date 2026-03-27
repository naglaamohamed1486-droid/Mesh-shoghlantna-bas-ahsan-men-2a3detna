document.addEventListener('DOMContentLoaded', () => {
    // 1. هات الوظائف اللي سما سيفتها في الـ LocalStorage
    const myAddedJobs = JSON.parse(localStorage.getItem('myJobs')) || [];
    
    // 2. امسك الجدول اللي هنضيف فيه
    const table = document.getElementById('jobsTable');

    if (table && myAddedJobs.length > 0) {
        myAddedJobs.forEach(job => {
            // 3. إنشاء صف جديد (Row)
            const row = table.insertRow(); 

            row.innerHTML = `
                <td>
                    <img src="./assets/imgs/Software Engineer.jpeg" alt="" width="150" height="100"><br>
                    <strong>${job.title}</strong>
                </td>
                <td>
                    ${job.company} </td>
                <td>
                    ${job.type}
                </td>
                <td>0</td> <td>
                    <button><a href="editjob.html" style="text-decoration: none;">Edit</a></button>
                    <button class="delete-btn" onclick="deleteJob(${job.id})">Delete</button>
                </td>
            `;
        });
    }
});

// وظيفة المسح (عشان لو حابة تمسحي وظيفة ضفتيها)
function deleteJob(id) {
    let jobs = JSON.parse(localStorage.getItem('myJobs')) || [];
    jobs = jobs.filter(j => j.id !== id);
    localStorage.setItem('myJobs', JSON.stringify(jobs));
    location.reload(); // ريفريش عشان تختفي
}