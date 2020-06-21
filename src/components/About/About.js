import React, { Component } from "react";
import alertify from "alertifyjs";
import "./About.css";

class about extends Component {
  emailClicked = () => {
    alertify.notify("Copied on clipboard!", "default", 3);
    var textField = document.createElement("textarea");
    textField.innerText = "vangelisgara@gmail.com";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  render() {
    var resumePDF = this.props.isgreek
      ? "Vangelis_Garaganis_CV_GR.pdf"
      : "Vangelis_Garaganis_CV_EN.pdf";
    return (
      <div className="my-auto mobile">
        {/* My Name */}
        <h1 className={"mt-5 " + (this.props.isgreek ? "greekhdr" : null)}>
          {this.props.isgreek ? "Ευαγγελος" : "Vangelis"} &nbsp;
          <p
            className={
              "text-primary " + (this.props.isgreek ? "greekhdr" : null)
            }
          >
            {this.props.isgreek ? "Γκαραγκανης" : "Garaganis"}
          </p>
        </h1>
        <div className={"contact-subheading"}>
          {this.props.isgreek ? "Αθήνα, Ελλάδα ·" : "Athens, Greece ·"}
          &nbsp;
          <p className="email" onClick={this.emailClicked}>
            vangelisgara@gmail.com
          </p>
        </div>
        {/* Text explaining who am I */}
        <p className="lead mt-2 mb-4">
          {this.props.isgreek
            ? "Είμαι προγραμματιστής που αγαπάει την επιστήμη της πληροφορικής και λατρεύω να σχεδιάζω και να δημιουργώ έργα λογισμικού. Έχω ολοκλήρωσει μια πληθώρα projects σε διάφορους τομείς της πληοροφορικής, ενώ ιδιαίτερη αγάπη έχω στo UX και στο Full-Stack Development. Σαν άνθρωπος είμαι αναλυτικός και με πολύ περιέργεια, γεγονός που με οδηγεί στο να μαθαίνω συνέχεια καινούρια πράγματα."
            : "I am a passionate developer that loves to bring pieces of code and design artifacts to life. I have completed numerous projects in fields of Artificial Intelligence, Machine Learning, Web Development, Data Structures etc. I am currently focusing in Full-Stack development and UX. I am highly analytical and I have an endless curiosity that drives me on learning new things."}
        </p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/vangelis-garaganis-a36426168/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/VangelisGara"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="resume">
          <a href={process.env.PUBLIC_URL + resumePDF} download>
            {this.props.isgreek ? "Λήψη Βιογραφικού" : "Download Resume"}
            &nbsp;&nbsp;<i className="fas fa-long-arrow-alt-down"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default about;
