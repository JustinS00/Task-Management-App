import React from "react";
import { Link } from "react-router-dom";
import Navbar from './Navbar';

class UserGuide extends React.Component {
  render() {
    return(
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <Navbar />
          </div>
        </section>
        <img src="./NewPage.png"></img>
        <div className="py-5">
          <main className="container">
            <p> some things here </p>
          </main>
        </div>
      </>
    );
  }
}

export default UserGuide;