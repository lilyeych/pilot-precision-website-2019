import React from 'react'
import Img from 'gatsby-image'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import styles from './styles/contact.module.scss'

export default ({ data }) => {
  return (
    <div id="contact" className={`section-deco ${styles.contact}`}>
      <div className="container">
        <h1 class="headline">{data.headline}</h1>
        <div>
          <img src={data.contactMap.file.url} alt="" />
        </div>

        <form>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label for="validationDefault01">First name</label>
              <input type="text" className="form-control" id="validationDefault01" placeholder="First name" value="Mark" required></input>
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationDefault02">Last name</label>
              <input type="text" className="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required></input>
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationDefaultUsername">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend2">@</span>
                </div>
                <input type="text" className="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required></input>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label for="validationDefault03">City</label>
              <input type="text" className="form-control" id="validationDefault03" placeholder="City" required></input>
            </div>
            <div className="col-md-3 mb-3">
              <label for="validationDefault04">State</label>
              <input type="text" className="form-control" id="validationDefault04" placeholder="State" required></input>
            </div>
            <div className="col-md-3 mb-3">
              <label for="validationDefault05">Zip</label>
              <input type="text" className="form-control" id="validationDefault05" placeholder="Zip" required></input>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
              <label className="form-check-label" for="invalidCheck2">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <button className="btn btn-primary" type="submit">Submit form</button>
        </form>

        <div>
          <p>{data.contact1Email}</p>
          <p>{data.contact1Name}</p>
          <p>{data.contact1PhoneNumber}</p>
          <p>{data.contact2Name}</p>
          <p>{data.contact2Title}</p>
          <p>{data.contact2Email}</p>
          <p>{data.contact2PhoneNumber}</p>
          <p>{data.address}</p>
          <p>{data.website}</p>
          <p>{data.copyRight}</p>
        </div>
      </div>
    </div>
  );
}
