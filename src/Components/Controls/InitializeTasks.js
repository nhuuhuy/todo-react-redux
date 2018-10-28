import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../Actions/index'
class InitializeTasks extends Component {
    render() {
        return (
            <button
                type="button"
                className="btn my-1 btn--localStorage"
                onClick={this.props.initializeTasks}
            >
                <i className="fa fa-pencil-square-o" />
                Lấy Task từ localStorage
            </button>
        );
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        initializeTasks: () => {
            dispatch(actions.initalizeTask())
        }
    }
}
export default connect(null,mapDispatchToProps)(InitializeTasks);