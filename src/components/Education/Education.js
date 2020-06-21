import React from "react";

class Education extends React.Component {
   render() {
      return (
         <div className="my-auto mobile">
            <h2 className={"mb-5 " + (this.props.isgreek ? "greekcathdr" : null)}>
               {this.props.isgreek ? "Εκπαιδευση" : "Education"}
            </h2>
            {/* University */}
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
               <div className="resume-content mr-auto">
                  <h3 className={"mb-0 " + (this.props.isgreek ? "greekedu" : null)}>
                     {this.props.isgreek
                        ? "Τμημα Πληροφορικης & Τηλεπικοινωνιων"
                        : "Department Of Informatics & Telecommunications"}
                  </h3>
                  <div className={"subheading mb-3 " +
                        (this.props.isgreek ? "greeksubhdr" : null)}>
                     {this.props.isgreek
                        ? "Εθνικό Καποδιστριακό Πανεπιστήμιο Αθηνών"
                        : "National & Kapodistrian University Of Athens"}
                  </div>
                  <div>
                     {this.props.isgreek
                        ? "Κατά την διάρκεια της σχολής ήρθα σε επαφή με τομείς της θεωρητικής πληροφορικής, επεξεργασία σήματος. επιστήμης των δεδομέων, δίκτυα κτλπ. "
                        : "During my academic years I have been involved in fields and projects of theoritical computer science, telecommunications and signal proccessing, data science, networking etc."}
                  </div>
                  <p>
                     {this.props.isgreek
                        ? "Έχω εξειδικευτεί στους εξής τομείς:"
                        : "Certified in the following specializations:"}
                  </p>
                  <ul>
                     <li>
                        {this.props.isgreek
                           ? "Διαχείριση Δεδομένων και Γνώσης"
                           : "Data Information & Knowledge Management"}
                     </li>
                     <li>
                        {this.props.isgreek
                           ? "Λογισμικό"
                           : "Computer Systems: Hardware & Software"}
                     </li>
                  </ul>
                  <p>
                     {this.props.isgreek ? "Μέσος Όρος" : "Average Rate"}: 7.66
                  </p>
               </div>
               <div className="resume-date text-md-right">
                  <span className="text-primary">
                     {this.props.isgreek
                        ? "Οκτώμβριος 2014-Οκτώμβριος 2020"
                        : "October 2014 - October 2020"}
                  </span>
               </div>
            </div>
            {/* English */}
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
               <div className="resume-content mr-auto">
                  <h3 className={"mb-0 " + (this.props.isgreek ? "greekedu" : null)}>
                     {this.props.isgreek
                        ? "Επιπεδο Αγγλικων Proficiency"
                        : "Proficiency in English"}
                  </h3>
                  <div className={"subheading mb-3 " +
                  (this.props.isgreek ? "greeksubhdr" : null)}>
                     {this.props.isgreek
                        ? "Πανεπιστήμιο του Michigan"
                        : "Certified by the University of Michigan"}
                  </div>
                  <div className="mb-3">
                     {this.props.isgreek
                        ? "Πήρα το πτυχίο μου τον Νοέμβριο του 2012, ενώ εξασκούμε συνεχώς λόγω της φύσης του αντικειμένου. "
                        : "I got my degree on November of 2012 and being practicing everyday due to programming requirements."}
                  </div>
               </div>
               <div className="resume-date text-md-right">
                  <span className="text-primary">
                     {this.props.isgreek ? "Νοέμβριος 2012" : "November 2012"}
                  </span>
               </div>
            </div>
            {/* Chinese */}
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
               <div className="resume-content mr-auto">
                  <h3 className={"mb-3 " + (this.props.isgreek ? "greekedu" : null)}>
                     {this.props.isgreek
                        ? "Τωρα μαθαινω Κινεζικα"
                        : "Learning Mandarin (汉语)"}
                  </h3>
                  <div className="mb-3">
                     {this.props.isgreek
                        ? "Επιτέλους, μετά απο πολλά χρόνια, μαθαίνω Κινέζικα ."
                        : "Finally, after many years, I am currently learning Chinese ."}
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Education;
