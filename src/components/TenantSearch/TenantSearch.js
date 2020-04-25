import React, { useState } from 'react';
import Axios from 'axios';
import { useFormik } from 'formik';
import styles from './TenantSearch.module.css';

const TenantSearch = () => {
  const formik = useFormik({
    initialValues: {
      data: '',
    },
    onSubmit: (values) => {
      formik.values.request_type = requestType;
      console.log(formik.values);
      Axios.get('http://localhost:3001/Feedback').then((response) => {
        setSearchComponent(false);
        setResponseData(response.data);
        if (requestType === 'phone_no') setPhoneComp(true);
      });
    },
  });
  const [requestType, setRequestType] = useState('');
  const [responseData, setResponseData] = useState({});
  const [isPhone, setPhone] = useState(false);
  const [isCsr, setCsr] = useState(false);
  const [isSearchComponent, setSearchComponent] = useState(true);
  const [isPhoneComp, setPhoneComp] = useState(false);
  const [isCsrComp, setCsrComp] = useState(false);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className={styles.formStyle}>
              <div className={styles.FeedbackHeading}>
                <h3>Feedback Form</h3>
              </div>
              <div className={styles.feedbackFormStyle}>
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="searchType"
                      id="phone_no"
                      value="phone_no"
                      onClick={(event) => {
                        setPhone(true);
                        setCsr(false);
                        formik.resetForm(formik.initialValues);
                        setRequestType(event.target.value);
                      }}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Search by Phone Number
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input p-4"
                      type="radio"
                      name="searchType"
                      id="csr"
                      value="csr"
                      onClick={(event) => {
                        setPhone(false);
                        setCsr(true);
                        formik.resetForm(formik.initialValues);
                        setRequestType(event.target.value);
                      }}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Search by CSR Number
                    </label>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-11">
                      <input
                        type="text"
                        name="data"
                        id="data"
                        className="form-control mt-3"
                        value={formik.values.data}
                        onChange={formik.handleChange}
                        placeholder="Enter Phone Number / CSR Number"
                      />
                      {isPhone ? (
                        <h6 className="text-success mt-2">
                          Enter 10 Digit Phone Number
                        </h6>
                      ) : null}
                      {isCsr ? (
                        <h6 className="text-success mt-2">
                          Enter 12 Digit CSR Number
                        </h6>
                      ) : null}
                    </div>
                  </div>
                  <button className="btn btn-info" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <table>
                <thead>
                  <React.Fragment>
                    <tr>
                      <th>Tenant Name</th>
                      <th>{isPhone ? `Phone Number` : `CSR Number`}</th>
                      <th>Username</th>
                      <th>Username</th>
                    </tr>
                  </React.Fragment>
                </thead>
              </table>
              {responseData.map((searchData) => {})}
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TenantSearch;
