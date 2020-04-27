import React, { Component } from 'react';
import Axios from 'axios';
import styles from './TenantSearch.module.css';
import PhoneSearch from './PhoneSearch/PhoneSearch';
import CSRSearch from './CSRSearch/CSRSearch';

class TenantSearch extends Component {
  state = {
    isPhone: false,
    isCsr: false,
    isPhoneSearch: false,
    isFetching: false,
    searchParam: '',
    tenantData: [],
    isSearching: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isFetching: !this.state.isFetching, isSearching: true });
    console.log('Handle Submitt', this.state.searchParam);
    if (this.state.isPhone) {
      Axios.get('http://localhost:5000/tenant_search/search', {
        request_type: 'phone_no',
        data: this.state.searchParam,
      }).then((response) => {
        const loadingData = [];

        loadingData.push(response.data);

        this.setState({ ...this.state, tenantData: loadingData });
        this.setState({ isFetching: true });
      });
    }
    if (this.state.isCsr) {
      Axios.get('http://localhost:5000/csr_search/search', {
        request_type: 'csr',
        data: this.state.searchParam,
      }).then((response) => {
        const loadingData = [];

        loadingData.push(response.data);

        this.setState({ ...this.state, tenantData: loadingData });
        this.setState({ isFetching: true });
      });
    }
  };

  formSubmitHandler = () => {
    console.log('formSubmitHandler');
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className={styles.formStyle}>
                <div className={styles.FeedbackHeading}>
                  <h3>Search Tenant</h3>
                </div>
                <div className={styles.feedbackFormStyle}>
                  <form onSubmit={this.formSubmitHandler}>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="searchType"
                        id="phone_no"
                        value="phone_no"
                        onClick={(event) => {
                          this.setState({
                            isPhone: true,
                            isCsr: false,
                            searchParam: '',
                            isFetching: false,
                            tenantData: [],
                          });
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
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
                          this.setState({
                            isCsr: true,
                            isPhone: false,
                            searchParam: '',
                            isFetching: false,
                            tenantData: [],
                          });
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
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
                          placeholder="Enter Phone Number / CSR Number"
                          onChange={(event) =>
                            this.setState({ searchParam: event.target.value })
                          }
                          value={this.state.searchParam}
                          maxLength="12"
                        />
                        {this.state.isPhone ? (
                          <h6 className="text-success mt-2">
                            Enter 10 Digit Phone Number
                          </h6>
                        ) : null}
                        {this.state.isCsr ? (
                          <h6 className="text-success mt-2">
                            Enter 12 Digit CSR Number
                          </h6>
                        ) : null}
                      </div>
                    </div>
                    <button
                      className="btn btn-info"
                      type="submit"
                      onClick={this.handleSubmit}
                      disabled={this.state.searchParam.length < 10}
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
              {this.state.isPhone && this.state.isFetching ? (
                <PhoneSearch
                  tenantWithPhoneSearch={this.state.tenantData}
                ></PhoneSearch>
              ) : this.state.isCsr && this.state.isFetching ? (
                <CSRSearch
                  tenantWithCSRSearch={this.state.tenantData}
                ></CSRSearch>
              ) : null}
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default TenantSearch;
