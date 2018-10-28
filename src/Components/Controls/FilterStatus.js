import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as action from '../../Actions/index'
class FilterStatus extends Component {

  render() {
    return (
      <div className="filter filter--progress">
        <ul className="list-unstyled text-left">Lọc
          <li className="py-1 display-5 lead" onClick={() => this.props.filterTasks()}>
            Tất cả
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={() => this.props.filterTasks('status', 1)}>
            <i className="fa fa-spinner mr-2"/>Đang tiến hành
          </li>
          <li className="py-1 display-5 lead" onClick={() => this.props.filterTasks('status', 2)}>
            <i className="fa fa-anchor mr-2"/>Chưa bắt đầu
          </li>
          <li className="py-1 display-5 lead" onClick={() => this.props.filterTasks('status', 3)}>
            <i className="fa fa-check-square-o mr-2"/>Hoàn thành
          </li>
          <li className="py-1 display-5 lead" onClick={() => this.props.filterTasks('status', 4)}>
            <i className="fa fa-trash-o mr-2"/>Hủy bỏ
          </li>
        </ul>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    filterTasks: (property, value) => {
      dispatch(action.filterTasks(property, value))
    }
  }
}
export default connect(null, mapDispatchToProps)(FilterStatus);