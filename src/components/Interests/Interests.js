import React from 'react';

const interests = (props) => (
  <div className="my-auto mobile">
    <h2 className={"mb-3 " + (props.isgreek ? 'greekcathdr' : null)}>
      {props.isgreek ? 'Ενδιαφεροντα' : 'Interests'}
    </h2>
    <p>
    	{props.isgreek ? 'Έκτος απο την πληοροφορική τρέφω ιδιαίτερη αγάπη για τον χορό και την ζωγραφική, ενώ σαν μερική απασχόληση δουλέυω σαν καθηγητής. Επίσης μου αρέσει η φιλοσοφία και ψυχολογία και περνάω τον χρόνο μου διαβάζοντας αρκετά βιβλία. ' :
    	'Apart from coding and designing, I work part time as a teacher and spent time in dancing and drawing. I also love psychology and philosphy and love reading books about them. '}
    </p>
  </div>
);

export default interests;
