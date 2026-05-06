const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// /api/users endpoint
app.get('/api/users', (req, res) => {
    res.json([
        { name: 'გიორგი', age: 25, profession: 'პროგრამისტი' },
        { name: 'მარიამ', age: 30, profession: 'დიზაინერი' },
        { name: 'დავით', age: 22, profession: 'სტუდენტი' }
    ]);
});

// /api/products endpoint
app.get('/api/products', (req, res) => {
    res.json([
        { name: 'ლეპტოპი', price: 1200, description: 'სამუშაო კომპიუტერი' },
        { name: 'მაუსი', price: 35, description: 'უსადენო მაუსი' },
        { name: 'კლავიატურა', price: 80, description: 'მექანიკური კლავიატურა' }
    ]);
});

// /api/courses endpoint
app.get('/api/courses', (req, res) => {
    res.json([
        { title: 'JavaScript Basics', lecturer: 'ნიკა', duration: '3 თვე' },
        { title: 'React', lecturer: 'სოფო', duration: '2 თვე' },
        { title: 'Node.js', lecturer: 'ლუკა', duration: '1 თვე' }
    ]);
});

const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});