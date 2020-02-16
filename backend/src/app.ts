import express from 'express';


const app = express();
const port = process.argv[2] === 'prod' ? 80 : 3000;
app.use(express.static("app"));
// Runs when server starts
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  try {
  
    console.log(`server started at http://localhost:${port}`);
  } catch (e) {
    console.log("Database connection error: ", e.message);
  }

});