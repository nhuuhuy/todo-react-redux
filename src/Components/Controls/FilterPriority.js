import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as action from '../../Actions/index'
class FilterPriority extends Component {
    changePriority = (event)=>{
        this.props.filterTasks(event.target.name, +event.target.value)
    }
    render() {
        return (
            <div className="form-group text-left">
                <label htmlFor="sel1">Độ ưu tiên</label>
                <select
                    className="form-control"
                    name="priority"
                    onChange={(event)=> this.changePriority(event)}
                >
                    <option value={null}  className="font-weight-bold">Tất cả</option>
                    <option value={1} className="text-info font-weight-bold">Thấp</option>
                    <option value={2} className="text-success font-weight-bold">Trung bình</option>
                    <option value={3} className="text-danger font-weight-bold">Cao</option>
                </select>
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
export default connect(null,mapDispatchToProps)(FilterPriority);