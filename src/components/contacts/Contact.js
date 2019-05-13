import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  // Directly use the response within axios call
  // onDeleteClick = (id, dispatch) => {
  //   axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(res =>
  //     dispatch({
  //       type: "DELETE_CONTACT",
  //       payload: id
  //     })
  //   );
  // };

  //Assign the response to a variable ... 1st, we need to
  //make it as async & await keywords... for event, we need to put async differenctly
  onDeleteClick = async (id, dispatch) => {
    // const res = axios.delete(
    //   `https://jsonplaceholder.typicode.com/users/${id}`
    // );
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({
      type: "DELETE_CONTACT",
      payload: id
    });
  };

  render() {
    // const { name, email, phone } = this.props;
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  // name: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // phone: PropTypes.string.isRequired
  contact: PropTypes.object.isRequired
  // deleteClickHandler: PropTypes.func.isRequired
};
export default Contact;
