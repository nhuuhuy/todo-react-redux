import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as action from '../../Actions/index'
class FilterLabel extends Component {
    render() {
        return (
            <div className="filter filter--label">
                <ul className="list-unstyled text-left">Nhãn
                    <li
                           onClick={()=> this.props.filterTasks()}
                    >
                        Tất cả
                    </li>
                    <li
                        className="py-1 display-5 lead"
                        onClick={()=> this.props.filterTasks('labelArr','Frontend')}
                    >
                        <i className="fa fa-circle mr-2" />Frontend
                    </li>
                    <li
                        className="py-1 display-5 lead"
                        onClick={()=> this.props.filterTasks('labelArr','Backend')}
                    >
                        <i className="fa fa-circle mr-2" />Backend
                    </li>
                    <li
                        className="py-1 display-5 lead"
                        onClick={()=> this.props.filterTasks('labelArr','API')}

                    >
                        <i className="fa fa-circle mr-2" />API
                    </li>
                    <li
                        className="py-1 display-5 lead"
                        onClick={()=> this.props.filterTasks('labelArr','Issue')}

                    >
                        <i className="fa fa-circle mr-2" />Issue
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

export default connect(null,mapDispatchToProps)(FilterLabel);