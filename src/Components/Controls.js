import React, { Component } from 'react'

import AddNewTask from './Controls/AddNewTask';
import InitializeTasks from './Controls/InitializeTasks';
import FilterStatus from './Controls/FilterStatus';
import FilterPriority from './Controls/FilterPriority';
import FilterLabel from './Controls/FilterLabel';

export default class Controls extends Component {
    render() {
        return (
            <div className="col-md-3 text-center px-0">
                <div className="header header--left d-flex align-items-center">
                    <img src="./img/user_1.jpg" className="ml-2 user" alt="user" />
                    <h3 className="text-white d-inline font-weight-light ml-2">Lê Quang Song</h3>
                </div>

                <InitializeTasks />

                <AddNewTask />

                {/* Filter */}
                <div className="px-3">

                    {/* FilterStatus */}
                    <FilterStatus />

                    {/* FilterLabel */}
                    <FilterLabel />


                    {/* Filter Priority */}
                    <FilterPriority />

                    <div className="form-group text-left">
                        <label>Sắp xếp theo công việc</label>
                        <select className="form-control">
                            <option>Từ A đến Z</option>
                            <option>Từ Z đến A</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}
