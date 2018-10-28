import React, { Component } from 'react';
import './App.css';
// Components
import ModalTask from './Components/ModalTask';
import TaskList from './Components/TaskList';
import Controls from './Components/Controls';
import FilterString from './Components/Controls/FilterString';

// Data
import listOfTasks from './Models/TaskModel/TaskModel';

class App extends Component {
  render() {
 
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <Controls />

            {/* DISPLAY */}
            <div className="col-md-9 px-0">
              <div className="container-fluid px-0">
                <div className="row header header--right d-flex align-items-center mx-0">
                  <div className="col-md-6">
                    <div className=" d-flex justify-content-between">
                      <h3 className="text-left ml-2 ">Danh sách công việc</h3>
                    </div>
                  </div>
                  
                  {/* FilterString */}
                  <FilterString />
                  
                </div>
              </div>
              
              <TaskList 
                tasks={listOfTasks.list}
              />
            </div>
          </div>
        </div>
        <ModalTask />
      </div>
    );
  }
}

export default App;
