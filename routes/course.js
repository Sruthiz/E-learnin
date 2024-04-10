const express = require("express");
const router = express.Router()

//index.route
router.get("/courses", async(req,res) =>{
    const allCourses = await Course.find({});
    res.render('courses/index.ejs', {allCourses});
    
})

//New Route
router.get("/courses/new", (req, res) => {
    res.render("courses/new.ejs");
  });
  

//show routes
router.get("/courses/:id", async (req, res) => {
    let {id} = req.params;
    const course = await course.findById(id);
    res.render("courses/show.ejs", { course });
  });

//create Route
router.post("/courses", async (req, res) => {
    try {
      const newCourse = new Course(req.body.course);
      await newCourse.validate(); // Validate the course before saving
      await newCourse.save();
      res.redirect("/courses");
    } catch (error) {
      console.error(error);
      res.status(400).send("Error creating course");
    }
  });
  
  
  //Edit Route
router.get("/courses/:id/edit", async (req, res) => {
      let { id } = req.params;
      const course = await course.findById(id);
      res.render("courses/edit.ejs", { course });
    });
    
    //Update Route
router.put("/courses/:id", async (req, res) => {
      let { id } = req.params;
      await Course.findByIdAndUpdate(id, { ...req.body.course });
      res.redirect(`/courses/${id}`);
    });
    
    //Delete Route
router.delete("/courses/:id", async (req, res) => {
      let { id } = req.params;
      let deletedCourse = await Course.findByIdAndDelete(id);
      console.log(deletedCourse);
      res.redirect("/courses");
    });
  
    module.exports = router;