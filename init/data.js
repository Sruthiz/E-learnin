
//const Course = require('./Course'); 
const sampleCourses = [
    {
        title: 'Full Stack Web Development',
        description: 'Comprehensive course covering front-end and back-end web development technologies.',
        price: 129,
        category: 'Web Development',
        level: 'Intermediate',
        popularity: 'High',
        image: 'https://tse4.mm.bing.net/th?id=OIP.jZP8enDDRCcDzJ2PkXmYRwHaE8&pid=Api&P=0&h=180' },
    {
        title: 'Machine Learning Fundamentals',
        description: 'Introduction to machine learning concepts and algorithms.',
        price: 99,
        category: 'Data Science',
        level: 'Beginner',
        popularity: 'Medium',
        image: 'https://tse1.mm.bing.net/th?id=OIP.wNARWHbDERUTCTpLKFuroQHaFP&pid=Api&rs=1&c=1&qlt=95&w=143&h=101',
    },
    {
        title: 'Mobile App Development with React Native',
        description: 'Learn to build mobile apps using React Native framework.',
        price: 149,
        category: 'Mobile App Development',
        level: 'Intermediate',
        popularity: 'High',
        image: 'https://tse4.mm.bing.net/th?id=OIP._Kbez54-k4LtJdGq5gg79gHaFj&pid=Api&P=0&h=180' 
    },
    {
        title: 'Python for Data Analysis',
        description: 'Using Python libraries for data manipulation, analysis, and visualization.',
        price: 119,
        category: 'Data Science',
        level: 'Intermediate',
        popularity: 'Medium',
        image: 'https://tse1.mm.bing.net/th?id=OIP.3HrF_-qrCDDPQyu7yXZJJgHaE8&pid=Api&rs=1&c=1&qlt=95&w=159&h=106'
    },
    {
        title: 'UI/UX Design Essentials',
        description: 'Fundamental principles of user interface and user experience design.',
        price: 79,
        category: 'UI/UX Design',
        level: 'Beginner',
        popularity: 'Low',
        image: 'https://tse1.mm.bing.net/th?id=OIP.3HrF_-qrCDDPQyu7yXZJJgHaE8&pid=Api&rs=1&c=1&qlt=95&w=159&h=106'
    },
    {
        title: 'Cybersecurity Basics',
        description: 'Introduction to cybersecurity concepts and best practices.',
        price: 89,
        category: 'Cybersecurity',
        level: 'Beginner',
        popularity: 'Medium',
        image: 'https://tse1.mm.bing.net/th?id=OIP.3HrF_-qrCDDPQyu7yXZJJgHaE8&pid=Api&rs=1&c=1&qlt=95&w=159&h=106'
    },
    {
        title: 'Data Structures and Algorithms in Java',
        description: 'Learn essential data structures and algorithms using Java programming language.',
        price: 119,
        category: 'Computer Science',
        level: 'Intermediate',
        popularity: 'High',
        image: 'https://tse1.mm.bing.net/th?id=OIP.3HrF_-qrCDDPQyu7yXZJJgHaE8&pid=Api&rs=1&c=1&qlt=95&w=159&h=106'
    },
    {
        title: 'Deep Learning with TensorFlow',
        description: 'Advanced course on deep learning techniques with TensorFlow framework.',
        price: 149,
        category: 'Data Science',
        level: 'Advanced',
        popularity: 'High',
        image: 'https://tse1.mm.bing.net/th?id=OIP.3HrF_-qrCDDPQyu7yXZJJgHaE8&pid=Api&rs=1&c=1&qlt=95&w=159&h=106'
    },
    {
        title: 'Front-End Web Development Bootcamp',
        description: 'Intensive bootcamp covering HTML, CSS, JavaScript, and popular front-end libraries.',
        price: 199,
        category: 'Web Development',
        level: 'Advanced',
        popularity: 'High',
        image: 'https://tse1.mm.bing.net/th?id=OIP.3HrF_-qrCDDPQyu7yXZJJgHaE8&pid=Api&rs=1&c=1&qlt=95&w=159&h=106'
    },
    {
        title: 'Blockchain Fundamentals',
        description: 'Introduction to blockchain technology and cryptocurrencies.',
        price: 99,
        category: 'Blockchain',
        level: 'Beginner',
        popularity: 'Medium',
        image: 'https://tse1.mm.bing.net/th?id=OIP.3HrF_-qrCDDPQyu7yXZJJgHaE8&pid=Api&rs=1&c=1&qlt=95&w=159&h=106'
    },
    {
        title: 'iOS App Development with Swift',
        description: 'Learn to build iOS apps using Swift programming language.',
        price: 149,
        category: 'Mobile App Development',
        level: 'Intermediate',
        popularity: 'High',
        image: 'https://tse1.mm.bing.net/th?id=OIP.3HrF_-qrCDDPQyu7yXZJJgHaE8&pid=Api&rs=1&c=1&qlt=95&w=159&h=106'
    },
    {
        title: 'Advanced CSS Techniques',
        description: 'Master advanced CSS concepts including animations, flexbox, and grid layouts.',
        price: 79,
        category: 'Web Development',
        level: 'Intermediate',
        popularity: 'Medium',
        image: 'https://tse1.mm.bing.net/th?id=OIP.3HrF_-qrCDDPQyu7yXZJJgHaE8&pid=Api&rs=1&c=1&qlt=95&w=159&h=106'
    }
];

module.exports = {data : sampleCourses};