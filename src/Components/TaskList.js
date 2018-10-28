import React, {Component} from 'react';
import {connect} from 'react-redux'
// import * as actions from '../Actions'
import TaskItem from './TaskItems/TaskItem';

class TaskList extends Component {
  render() {

    let elmTaskItem
       elmTaskItem = this.props.tasks.map((task, index) => {
        return <TaskItem key={index} index={index} task={task}/>
      })
    return (
      <div className="px-3">
        <table className="table table-hover">
          <thead>
            <tr>
              <th className="text-center">STT</th>
              <th className="text-center">Công việc</th>
              <th className="text-center">Nhãn</th>
              <th className="text-center">Độ ưu tiên</th>
              <th className="text-center">Người thực hiện</th>
              <th className="text-center">Xử lý</th>
              <th className="text-center">Tình trạng</th>
            </tr>
          </thead>
          <tbody>
            {elmTaskItem}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {tasks: state.tasks.tasks}
}
export default connect(mapStateToProps, null)(TaskList);