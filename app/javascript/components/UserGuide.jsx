import React from "react";
import { Link } from "react-router-dom";
import Navbar from './Navbar';

class UserGuide extends React.Component {
  render() {
    return(
      <div className="py-2">

        <Navbar />

        <main className="container align-items-center justify-content-center">
          <div className="container py-4 align-items-center justify-content-center">
            <div className="container py-4">
              <h4> 1. Start by creating a new task </h4>
              <img src = "https://raw.githubusercontent.com/JustinS00/Task-Management-App/main/app/assets/images/NewPage.png" style = {{width: "1080px", height: "400px" }}></img>
            </div>
            <div className="container py-4">
              <h4> 2. Fill up the details of your task </h4>
              <img src = "https://raw.githubusercontent.com/JustinS00/Task-Management-App/main/app/assets/images/NewTaskPage.png" style = {{width: "1080px", height: "400px" }}></img>
              <h4> 3. Click on Save Task and you will be redirected back to the front page </h4>
            </div>
            <div className="container py-4">
              <h4> 4. Sort or Search for your task using the Sort Button or the Search Bar respectively </h4>
              <img src = "https://raw.githubusercontent.com/JustinS00/Task-Management-App/main/app/assets/images/TasksPage.png" style = {{width: "1080px", height: "400px" }}></img>              
            </div>
            <div className="container py-4">
              <h4> 5. To view your task in detail, click on the View Button at the bottom of the task </h4>
              <img src = "https://raw.githubusercontent.com/JustinS00/Task-Management-App/main/app/assets/images/TaskPage.png" style = {{width: "1080px", height: "400px" }}></img>
               <h4> 6. You will be able to update your task or delete your task using the Edit or the Delete Button </h4>
               <h4> &nbsp;&nbsp;&nbsp;&nbsp;Note that once you delete your task it will be gone forever </h4>
            </div>
          </div>
        </main> 
      </div>
    );
  }
}

export default UserGuide;