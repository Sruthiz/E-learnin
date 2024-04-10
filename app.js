const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Course = require("./models/course.js");
const path = require("path");
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const passport = require("passport");
const LocalStrategy = require("passport-local-mongoose");
const User = require("./models/user.js")
const session = require("express-sessions");
const flash = require("connect-flash");
const {courseSchema,reviewSchema} = require("./schema.js");
const ReviewRouter = require("./models/review.js");

const courseRouter = require("./routes/course.js")
const userRouter = require("./routes/user.js")


 
const MONGO_URL = "mongodb://localhost:27017/E-Learning";

main().then(() =>{
    console.log("connected to DB");
}).catch((err) =>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL)
}

app.set('views',path.join(__dirname,'views'));
app.set('view engine',"ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));
const MongoStore = require('connect-mongo');

app.get("/",(req,res)=>{
    res.send("Hi, i am root");
})

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
      secret: process.env.SECRET,
  },
  touchAfter: 24 * 60 * 60, // See below for details
});

store.on("error", () => {
  console.log("Error in MongoSession store");
})

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true, //cross scripting attacks
  }
};

const dbUrl = process.env.ATLASDB_URL;

main()
    .then(() => { console.log("connected to database") })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(dbUrl);
}

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.user(new LocalStrategy(User.authentication()));


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//index.route
app.get("/courses", async(req,res) =>{
    const allCourses = await Course.find({});
    res.render('courses/index.ejs', {allCourses});
    
})

//New Route
app.get("/courses/new", (req, res) => {
    res.render("courses/new.ejs");
  });
  

//show routes
app.get("/courses/:id", async (req, res) => {
    let {id} = req.params;
    const course = await Course.findById(id);
    res.render("courses/show.ejs", { course });
  });



app.post("/courses", async (req, res) => {
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
app.get("/courses/:id/edit", async (req, res) => {
    let { id } = req.params;
    const course = await Course.findById(id);
    res.render("courses/edit.ejs", { course });
  });
  
  //Update Route
  app.put("/courses/:id", async (req, res) => {
    let { id } = req.params;
    await Course.findByIdAndUpdate(id, { ...req.body.course });
    res.redirect(`/courses/${id}`);
  });
  
  //Delete Route
  app.delete("/courses/:id", async (req, res) => {
    let { id } = req.params;
    let deletedCourse = await Course.findByIdAndDelete(id);
    console.log(deletedCourse);
    res.redirect("/courses");
  });

  
  

//reviews
app.post("/courses/:id/reviews", async(req,res) => {
  let course = await Course.findById(req.params.id);
  let newReview = new Review(req.body.review);
  course.reviews.push(newReview)

  await newReview.save();
  await course.save();

  console.log("new review saved");
  res.send("new review saved");

});

// app.get("/testCourse", async(req,res) =>{
//     let sampleCourse = new Course({
//         title: "Web Course",
//         description : "Begineers and friendly",
//         price : 4500,
//         category : "web Development",
//         level : "Beginner",
//         popularity : "High"
//     });
    
//    await  sampleCourse.save();
//     console.log("sample was saved");
//     res.send("success testing");
// });

app.get('/demouser', async(req,res) =>{
  let fakeUser = new User({
    email : "student@gmail.com",
    username: "EXAMPLE"
  });
let registeredUser =  await User.register(fakeUser,"heloworld");
res.send(registeredUser);
});

app.use("/courses", CourseRouter);
app.use("/courses/:id/reviews", ReviewRouter);
app.use("/",userRouter);

app.listen(3000, () => {
    console.log("server is listening to the port 8080");
})

