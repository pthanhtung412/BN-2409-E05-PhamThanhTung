const express = require("express");
const path = require("path");
const hbs = require("hbs");
const mongoose = require("mongoose");
const authRoute = require("./routes/authRoutes")

const app = express();

app.use(express.urlencoded({ extended: true }));
// middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// view engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));


const uri = "mongodb+srv://pthanhtung412:Lycg6bl8YJea2enj@cluster0.k6z07.mongodb.net/demo_auth?retryWrites=true&w=majority";

// Hàm kết nối với MongoDB bằng mongoose
async function connectToMongoDB() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB using mongoose!");
    
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
}

// Gọi hàm để thực hiện kết nối
connectToMongoDB();

// routes
app.get("", (req, res) => {
  res.render("home");
});


app.use(authRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});