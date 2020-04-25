import React from 'react';
import axios from 'axios';

class Lanlord extends React.Component {
  constructor() {
    super();
    this.state = {
      backendData: [],
      name: '',
      isPhoneSelected: true,
      isCSRSelected: false,
      requestType: 'phone_no',
    };
  }
  //Get Method
  componentDidMount() {
    console.log('ComponentDidMount');
    this.getDataFromBackend();
  }

  getDataFromBackend() {
    console.log('getDataFromBackend');
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      console.log(res);
      this.setState({ backendData: res.data });
    });
  }

  //radiobutton select option
  phoneHandler = () => {
    this.setState({
      isPhoneSelected: true,
      isCSRSelected: false,
      requestType: 'phone_no',
    });
  };
  csrHandler = () => {
    this.setState({
      isPhoneSelected: false,
      isCSRSelected: true,
      requestType: 'csr',
    });
  };

  handleChange = (event) => {
    console.log('Test field', event.target.value);
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    console.log('submit action');
    console.log('RadioType', this.state.requestType);
    event.preventDefault();

    const user = {
      name: this.state.name,
    };

    axios
      .post('https://jsonplaceholder.typicode.com/users', { user })
      .then((res) => {
        console.log('posting data response-->', res);
        if (res.status === 201) {
          this.getDataFromBackend();
        }
      });
  };

  setPhoneNumber(event) {
    console.log(event.target.value);
  }
  setCsrNumber(event) {
    console.log(event.target.value);
  }
  render() {
    return (
      <div class="container">
        <h1>Lanlord Form Submission</h1>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group row col-xs-7">
            <input
              type="radio"
              checked={this.state.isPhoneSelected}
              onChange={this.phoneHandler}
            />
            <label>Phone Number:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Phone Number"
              disabled={this.state.isRadioSelected}
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group row col-xs-7">
            <input
              type="radio"
              checked={this.state.isCSRSelected}
              onChange={this.csrHandler}
            />
            <label>CSR Number:</label>

            <input
              type="text"
              size="20"
              class="form-control"
              placeholder="CSR Number"
              disabled={this.state.isRadioSelected}
            />
          </div>
          <div class="form-group row col-xs-7">
            <button type="submit" class="btn btn-primary active">
              submit
            </button>
          </div>

          <div class="form-group row col-xs-7">
            <ul>
              {this.state.backendData &&
                this.state.backendData.map((person) => (
                  <li key={person.id}>{person.name}</li>
                ))}
            </ul>
          </div>
        </form>
      </div>
    );
  }
}

export default Lanlord;
