import React, {Component} from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import * as actions from '../Actions/index';
import {connect} from 'react-redux'
var randomID = require("random-id");
class ModalTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.task
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.id === '') {
        this.setState({
            id : randomID(5)
        })
     console.log(this.state.id)
      this
        .props
        .addTask(this.state);
    } else {
      this
        .props
        .editTask(this.state);
    }
  }

  onReset = () => {
    this.setState({
      id: '',
      name: '',
      labelArr: [],
      priority: 1,
      memberIDArr: [],
      status: 1,
      description: ''
    })
  }
  componentWillReceiveProps(nextPros) {
    this.setState({
      ...nextPros.task
    })
  }
  render() {
    return (
      <div className="modal fade" id="modalTask">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">
                {this.props.task.id? 'Sua cong viec' :'Thêm công việc'}
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <form onSubmit={this.onSubmit}>
              {/* Modal body */}
              <div className="modal-body">

                <div className="form-group">
                  <label>Tên công việc:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={this.onChange}
                    value={this.state.name}/>
                </div>
                <div className="form-group">
                  <label>Mô tả:</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    name="description"
                    onChange={this.onChange}
                    value={this.state.description}/>
                </div>
                <div className="form-group">
                  <label htmlFor="priority">Độ ưu tiên:</label>
                  <select
                    className="form-control"
                    name="priority"
                    onChange={this.onChange}
                    value={this.state.priority}>
                    <option value="1">Thấp</option>
                    <option value="2">Trung bình</option>
                    <option value="3">Cao</option>
                  </select>
                </div>

                <CheckboxGroup checkboxDepth={2} // This is needed to optimize the checkbox group
                  name="memberIDArr" value={this.state.memberIDArr} onChange={this.membersChanged} className="mt-2">
                  <label>Người thực hiện:</label><br/>
                  <label><Checkbox value="user_2" className="ml-3"/>
                    Phó Nghĩa Văn</label>
                  <label><Checkbox value="user_3" className="ml-3"/>
                    Nguyễn Tiến Minh Tuấn</label>
                  <label><Checkbox value="user_4" className="ml-3"/>
                    Đặng Trung Hiếu</label>
                  <label><Checkbox value="user_5" className="ml-3"/>
                    Trương Tấn Khải</label>
                </CheckboxGroup>

                <CheckboxGroup checkboxDepth={2} // This is needed to optimize the checkbox group
                  name="labelArr" value={this.state.labelArr} onChange={this.labelsChanged} className="mt-2">
                  <label>Nhãn:
                  </label><br/>
                  <label><Checkbox value="Frontend" className="ml-3"/>Frontend
                  </label>
                  <label><Checkbox value="Backend" className="ml-3"/>Backend
                  </label>
                  <label><Checkbox value="API" className="ml-3"/>API
                  </label>
                  <label><Checkbox value="Issue" className="ml-3"/>Issue
                  </label>
                </CheckboxGroup>

              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button type="submit" className="btn btn-success">
                  {this.props.task.id? 'Sua cong viec' :'Thêm công việc'}
                </button>

                <button type="button" className="btn btn-danger ml-2" data-dismiss="modal">
                  Đóng
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
  }

  membersChanged = (newMemberss) => {
    this.setState({memberIDArr: newMemberss});
  }
  labelsChanged = (newLabels) => {
    this.setState({labelArr: newLabels});
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    addTask: (task) => {
      dispatch(actions.addTask(task))
    },
    editTask: (task) => {
      dispatch(actions.editTask(task))
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {task: state.tasks.task}
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalTask);