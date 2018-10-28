import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from '../../Actions/index'
class AddNewTask extends Component {

  render() {
    const task = {
      id: '',
      name: '',
      labelArr: [],
      priority: 1,
      memberIDArr: [],
      status: 1,
      description: ''
    }
    return (
      <button
        type="button"
        className="btn my-1 btn--newTask"
        data-toggle="modal"
        data-target="#modalTask"
        onClick={() => this.props.selectTask(task)}>
        <i className="fa fa-pencil-square-o"/>
        Tạo Task mới
      </button>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectTask: (task) => {
      dispatch(actions.selectTask(task))
    }
  }
}
export default connect(null, mapDispatchToProps)(AddNewTask);