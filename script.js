async function loadData(endpoint, containerId) {
    const container = document.getElementById(containerId);
    try {
        const response = await fetch(`http://localhost:8080/api/${endpoint}`);
        const data = await response.json();

        container.innerHTML = data.map(item =>
            `<div class="card">
                ${Object.entries(item).map(([key, val]) =>
                    `<p><strong>${key}:</strong> ${val}</p>`
                ).join('')}
            </div>`
        ).join('');
    } catch (error) {
        container.innerHTML = '<p>შეცდომა მონაცემების ჩატვირთვისას</p>';
    }
}

loadData('users', 'users');
loadData('products', 'products');
loadData('courses', 'courses');