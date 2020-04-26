import React from 'react';
import styles from './CSRSearch.module.css';

const CSRSearch = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-0"></div>
        <div className="col-md-12">
          <div className={styles.formStyle}>
            <div className={styles.FeedbackHeading}>
              <h3>Tenant Details</h3>
            </div>
            <div className={styles.feedbackFormStyle}>
              {props.tenantWithCSRSearch.length > 0 ? (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Mobile Number</th>
                      <th>Feedback</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.tenantWithCSRSearch.map((tenantData, index) => {
                      return (
                        <tr key={index}>
                          <td>{tenantData.tenant_name}</td>
                          <td>{tenantData.tenant_mob}</td>
                          <td>{tenantData.feedback}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <h5 className={`text-danger ${styles.noRecord}`}>
                  {' '}
                  No Record Found
                </h5>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-0"></div>
      </div>
    </div>
  );
};

export default CSRSearch;
