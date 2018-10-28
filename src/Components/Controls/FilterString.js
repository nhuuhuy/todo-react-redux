import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as action from '../../Actions/index'
class filterString extends Component {
    changString = (event)=>{
        this.props.filterTasks('name',event.target.value)
    }
    render() {
        return (
            <div className="col-md-6">
                <div className="form-group text-left my-0">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tìm kiếm công việc"
                        onChange= {(event)=> this.changString(event)}
                    />
                </div>
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
  export default connect(null, mapDispatchToProps)( filterString);