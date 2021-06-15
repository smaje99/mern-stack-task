import React, { Component } from 'react';

class App extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            tasks: []
        };
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getTasks = this.getTasks.bind(this);
        this.editTask = this.editTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    addTask(e) {
        fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': "application/json",
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                M.toast({html: data.status})
                this.setState({
                    title: '',
                    description: ''
                })
                this.getTasks();
            })
            .catch(err => console.error(err));
        e.preventDefault();
    }

    componentDidMount() {
        this.getTasks();
    }

    getTasks() {
        fetch('/api/tasks')
            .then(res => res.json())
            .then(data => setState({tasks: data}));
    }

    

    deleteTask(id) {
        if (confirm('Are you sure you want to delete it?')) {
            fetch(`/api/tasks/${id}`, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    M.toast({html: data.status});
                    this.getTasks();
                });
        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">MERN Stack</a>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className=" col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input
                                                    type="text"
                                                    placeholder="Task Title"
                                                    onChange={this.handleChange}
                                                    value={this.state.title} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea
                                                    placeholder="Task Description"
                                                    className="materialize-textarea"
                                                    onChange={this.handleChange}
                                                    value={this.state.description}>
                                                </textarea>
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn light-blue darken-4">
                                            Send
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className=" col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.tasks.map(task => {
                                        return (
                                            <tr key={task._id}>
                                                <td>{task.title}</td>
                                                <td>{task.description}</td>
                                                <td>
                                                    <button
                                                        className="btn light-blue darken-4"
                                                        onClick={() => this.editTask(task._id)}>
                                                        <i className="material-icons">
                                                            edit
                                                        </i>
                                                    </button>
                                                    <button
                                                        className="btn light-blue darken-4"
                                                        style={{margin: '4px'}}
                                                        onClick={() => this.deleteTask(task._id)}>
                                                        <i className="material-icons">
                                                            delete
                                                        </i>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;