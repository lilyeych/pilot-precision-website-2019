import React from 'react'
import Img from 'gatsby-image'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import styles from './styles/contact.module.scss'

export default class contact extends React.Component {
  constructor(props){
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    return (
      <div>
        <div id="contact" className={`section-deco container ${styles.contact}`}>
          <div>
            <h1 class="headline">{this.props.data.headline}</h1>
            <div>
              <img src={this.props.data.contactMap.file.url} alt="" />
            </div>
              
            <form className={styles.contactForm} onSubmit={this.submitForm} action="https://formspree.io/xqklewro" method="POST" enctype="text/plain">
              <div className={styles.formRow}>
                <label for="validationDefault01">Name:</label>
                <input type="text" name="Name" className="form-control" id="validationDefault01" required></input>
              </div>
              <div className={styles.formRow}>
                <label for="validationDefault02">Company:</label>
                <input type="text" name="Company" className="form-control" id="validationDefault02" required></input>
              </div>
              <div className={styles.formRow}>
                <label for="validationDefault03">Phone:</label>
                <input type="number"name="Phone" className="form-control" id="validationDefault03" required></input>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formMessege}>
                  <label for="validationDefault04">Message:</label>
                  <textarea rows="1" name="Message" className="form-control" id="validationDefault04" required></textarea>
                </div>
  
                
                <button className={`btn btn-primary ${styles.submitBtn}`} type="submit">Submit</button>
              </div>
              {this.state.status === "SUCCESS" && <p>Thanks!</p>}
              {this.state.status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
          </div>
        </div>
        <div className={styles.contacts}>
          <div className="container">
            <div className={styles.contactItem}>
              <p className={styles.name}>{this.props.data.contact1Name}</p>
              <p className={styles.title}>{this.props.data.contact1Title}</p>
              <hr />
              <p>{this.props.data.contact1Email}</p>
              <p>{this.props.data.contact1PhoneNumber}</p>
            </div>
  
            <div className={styles.contactItem}>
              <p className={styles.name}>{this.props.data.contact2Name}</p>
              <p className={styles.title}>{this.props.data.contact2Title}</p>
              <hr />
              <p>{this.props.data.contact2Email}</p>
              <p>{this.props.data.contact2PhoneNumber}</p>
            </div>
  
            <div className={styles.contactItem}>
              <p>{this.props.data.address}</p>
              <p>{this.props.data.contact3Email}</p>
              <p>{this.props.data.contact3PhoneNumber}</p>
              <hr />
              <p className={styles.website}>{this.props.data.website}</p>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <p>{this.props.data.copyRight}</p>
        </div>
      </div>
    )
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

