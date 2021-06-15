import React, { Component } from 'react';

class App extends Component {

    

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
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;