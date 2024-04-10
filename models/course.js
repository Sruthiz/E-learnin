const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Course/Product Schema
const CourseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
     image: {
        type: String,
        default : " https://www.allbusinesstemplates.com/thumbs/8e402f57-1b43-4878-8915-707979b5a4c0.PNG",
        set: (v) => 
        v === "" ? " https://www.allbusinesstemplates.com/thumbs/8e402f57-1b43-4878-8915-707979b5a4c0.PNG"
        : v,
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    popularity: {
        type: String,
        //enum: ['Low', 'Medium', 'High'],
        default: 'Low'
    },
    reviews :[ {
        type: Schema.Types.ObjectId,
        ref: "Review"
    }
    ]
});

// Create and export the Course/Product model
const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
