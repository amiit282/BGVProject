import React, { useState } from 'react';
import { useFormik } from 'formik';
import Axios from 'axios';
import { FeebackData } from '../../../Model/FeedBackModel';
import styles from './Landlord.module.css';
import { ValidationSchema } from './Validation';

import * as yup from 'yup';

const Landlord = (props) => {
  const [status, setStatus] = useState(0);
  const [loading, updateLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      landlord_name: '',
      landlord_mob: '',
      landlord_email: '',
      permanent_addr: '',
      landLordAddress: '',
      landLordCity: '',
      landLordState: '',
      landLordZip: '',
      tenantname: '',
      tenantmobile: '',
      tenantAddr: '',
      tenantCity: '',
      tenantState: '',
      tenantZip: '',
      tenant_email: '',
      feedback: '',
      csr_no: '',
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      FeebackData.landlord_name = formik.values.landlord_name;
      FeebackData.landlord_mob = Number(formik.values.landlord_mob);
      FeebackData.landlord_email = formik.values.landlord_email;
      FeebackData.tenant_name = formik.values.tenantname;
      FeebackData.tenant_mob = Number(formik.values.tenantmobile);
      FeebackData.tenant_email = formik.values.tenant_email;
      FeebackData.permanent_addr = 'Address: '
        .concat(values.landLordAddress)
        .concat(' city: ')
        .concat(values.landLordCity)
        .concat(' state: ')
        .concat(values.landLordState)
        .concat(' Zip: ')
        .concat(values.landLordZip);

      FeebackData.tenant_address = 'Address: '
        .concat(values.tenantAddr)
        .concat(' City: ')
        .concat(values.tenantCity)
        .concat(' State: ')
        .concat(values.tenantState)
        .concat(' Zip: ')
        .concat(values.tenantZip);
      FeebackData.feedback = formik.values.feedback;
      FeebackData.csr_no = formik.values.csr_no;
      console.log('Input Values: ', values);
      console.log('Feedback Data: ', FeebackData);
      updateLoading(true);
      Axios.post('http://localhost:3001/Feedback', FeebackData)
        .then((response) => {
          console.log(response.status);
          setTimeout(() => {
            setStatus({ status: response.status });
            updateLoading(false);
            console.log('inside set timeout function', response.status);
            console.log('inside settimeout ');
            formik.resetForm(formik.initialValues);
          }, 2000);
        })
        .catch((error) => {
          updateLoading(false);
          setStatus({ status: 404 });
          console.log('error block', error);
        });
    },
  });

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className={styles.formStyle}>
              <div className={styles.FeedbackHeading}>
                <h3>Feedback Form</h3>
              </div>
              <div className={styles.feedbackFormStyle}>
                <form onSubmit={formik.handleSubmit}>
                  <div className={styles.section1}>
                    <span>1</span>
                    <label htmlFor="landLordDetails" className={styles.Details}>
                      Landlord Details
                    </label>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="landLordname">Name </label>
                      <input
                        type="text"
                        className="form-control"
                        name="landlord_name"
                        id="landlord_name"
                        placeholder="Enter Your Name"
                        value={formik.values.landlord_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.landlord_name &&
                      formik.errors.landlord_name ? (
                        <h6 className="text-danger">
                          {formik.errors.landlord_name}
                        </h6>
                      ) : null}
                    </div>

                    <div className="form-group col-md-6">
                      <label htmlFor="mobile">Mobile </label>
                      <input
                        type="text"
                        className="form-control"
                        maxLength="10"
                        name="landlord_mob"
                        id="landlord_mob"
                        placeholder="Enter Your 10 digit Mobile Number"
                        value={formik.values.landlord_mob}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.landlord_mob &&
                      formik.errors.landlord_mob ? (
                        <h6 className="text-danger">
                          {formik.errors.landlord_mob}
                        </h6>
                      ) : null}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="landlord_email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="landlord_email"
                        id="landlord_email"
                        placeholder="e.g abc@xyz.com"
                        value={formik.values.landlord_email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.landlord_email &&
                      formik.errors.landlord_email ? (
                        <h6 className="text-danger">
                          {formik.errors.landlord_email}
                        </h6>
                      ) : null}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="landLordAddress">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        name="landLordAddress"
                        id="landLordAddress"
                        value={formik.values.landLordAddress}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.landLordAddress &&
                      formik.errors.landLordAddress ? (
                        <h6 className="text-danger">
                          {formik.errors.landLordAddress}
                        </h6>
                      ) : null}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <label htmlFor="landLordCity">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="landLordCity"
                        name="landLordCity"
                        placeholder="City"
                        value={formik.values.landLordCity}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.landLordCity &&
                      formik.errors.landLordCity ? (
                        <h6 className="text-danger">
                          {formik.errors.landLordCity}
                        </h6>
                      ) : null}
                    </div>
                    <div className="form-group col-md-5">
                      <label htmlFor="landLordState">State</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your State"
                        id="landLordState"
                        name="landLordState"
                        value={formik.values.landLordState}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.landLordState &&
                      formik.errors.landLordState ? (
                        <h6 className="text-danger">
                          {formik.errors.landLordState}
                        </h6>
                      ) : null}
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="landLordZip">Zip</label>
                      <input
                        type="text"
                        className="form-control"
                        id="landLordZip"
                        name="landLordZip"
                        maxLength="6"
                        placeholder="6-Digit Zipcode"
                        value={formik.values.landLordZip}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.landLordZip &&
                      formik.errors.landLordZip ? (
                        <h6 className="text-danger">
                          {formik.errors.landLordZip}
                        </h6>
                      ) : null}
                    </div>
                  </div>
                  <div className={styles.section1}>
                    <span>2</span>
                    <label htmlFor="tenantDetails" className={styles.Details}>
                      Tenant Details
                    </label>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="tenantname">Tenant Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Tenant Name"
                        name="tenantname"
                        id="tenantname"
                        value={formik.values.tenantname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.tenantname && formik.errors.tenantname ? (
                        <h6 className="text-danger">
                          {formik.errors.tenantname}
                        </h6>
                      ) : null}
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="tenantmobile">Tenant Mobile</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter 10 Digit Tenant Mobile Number"
                        name="tenantmobile"
                        id="tenantmobile"
                        maxLength="10"
                        value={formik.values.tenantmobile}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.tenantmobile &&
                      formik.errors.tenantmobile ? (
                        <h6 className="text-danger">
                          {formik.errors.tenantmobile}
                        </h6>
                      ) : null}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="tenant_email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Tenant Email. e.g abc@xyz.com"
                        name="tenant_email"
                        id="tenant_email"
                        value={formik.values.tenant_email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.tenant_email &&
                      formik.errors.tenant_email ? (
                        <h6 className="text-danger">
                          {formik.errors.tenant_email}
                        </h6>
                      ) : null}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="tenantAddr">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name="tenantAddr"
                        id="tenantAddr"
                        placeholder="Tenant Address"
                        value={formik.values.tenantAddr}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.tenantAddr && formik.errors.tenantAddr ? (
                        <h6 className="text-danger">
                          {formik.errors.tenantAddr}
                        </h6>
                      ) : null}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-5">
                      <label htmlFor="tenantCity">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="tenantCity"
                        name="tenantCity"
                        placeholder="Enter Tenant City"
                        value={formik.values.tenantCity}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.tenantCity && formik.errors.tenantCity ? (
                        <h6 className="text-danger">
                          {formik.errors.tenantCity}
                        </h6>
                      ) : null}
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="tenantState">State</label>
                      <input
                        type="text"
                        className="form-control"
                        id="tenantState"
                        name="tenantState"
                        placeholder="Enter Tenant State"
                        value={formik.values.tenantState}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.tenantState &&
                      formik.errors.tenantState ? (
                        <h6 className="text-danger">
                          {formik.errors.tenantState}
                        </h6>
                      ) : null}
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="tenantZip">Zip</label>
                      <input
                        type="text"
                        className="form-control"
                        id="tenantZip"
                        name="tenantZip"
                        maxLength="6"
                        placeholder="6-Digit Number"
                        value={formik.values.tenantZip}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.tenantZip && formik.errors.tenantZip ? (
                        <h6 className="text-danger">
                          {formik.errors.tenantZip}
                        </h6>
                      ) : null}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="csr_no">CSR Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter CSR Number"
                        name="csr_no"
                        id="csr_no"
                        value={formik.values.csr_no}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="feedback">Feedback</label>
                      <textarea
                        className="form-control"
                        rows="5"
                        name="feedback"
                        id="feedback"
                        placeholder="Enter Tenant Feedback"
                        onChange={formik.handleChange}
                        value={formik.values.feedback}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.feedback && formik.errors.feedback ? (
                        <h6 className="text-danger">
                          {formik.errors.feedback}
                        </h6>
                      ) : null}
                    </div>
                  </div>

                  <button
                    className="btn btn-success"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <span>
                        <i className="fa fa-refresh fa-spin"></i>
                        <span>Submitting</span>
                      </span>
                    ) : (
                      <span>Submit</span>
                    )}
                  </button>
                </form>
                {JSON.parse(JSON.stringify(status)).status === 201 ? (
                  <h5 className="text-success">
                    Feedback Submitted Successfully
                  </h5>
                ) : null}
                {JSON.parse(JSON.stringify(status)).status === 404 ? (
                  <h5 className="text-danger">Feedback Not Submitted</h5>
                ) : null}
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <h4>{formik.isValid}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landlord;
