import React from 'react'
import Img from 'gatsby-image'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import styles from './styles/contact.module.scss'

export default ({ data }) => {
  return (
    <div>
      <div id="contact" className={`section-deco container ${styles.contact}`}>
        <div className="content">
          <h1 class="headline">{data.headline}</h1>
          <div>
            <img src={data.contactMap.file.url} alt="" />
          </div>

          <form className={styles.contactForm}>
            <div className={styles.formRow}>
              <label for="validationDefault01">Name:</label>
              <input type="text" className="form-control" id="validationDefault01" required></input>
            </div>
            <div className={styles.formRow}>
              <label for="validationDefault02">Company:</label>
              <input type="text" className="form-control" id="validationDefault02" required></input>
            </div>
            <div className={styles.formRow}>
              <label for="validationDefault03">Phone:</label>
              <input type="number" className="form-control" id="validationDefault03" required></input>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formMessege}>
                <label for="validationDefault04">Message:</label>
                <textarea rows="1" className="form-control" id="validationDefault04" required></textarea>
              </div>

              <button className={`btn btn-primary ${styles.submitBtn}`} type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.contacts}>
        <div className="container">
          <div className={styles.contact}>
            <p className={styles.name}>{data.contact1Name}</p>
            <p className={styles.title}>{data.contact1Title}</p>
            <hr />
            <p>{data.contact1Email}</p>
            <p>{data.contact1PhoneNumber}</p>
          </div>

          <div className={styles.contact}>
            <p className={styles.name}>{data.contact2Name}</p>
            <p className={styles.title}>{data.contact2Title}</p>
            <hr />
            <p>{data.contact2Email}</p>
            <p>{data.contact2PhoneNumber}</p>
          </div>

          <div className={styles.contact}>
            <p>{data.address}</p>
            <hr />
            <p className={styles.website}>{data.website}</p>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <p>{data.copyRight}</p>
      </div>
    </div>
  );
}
