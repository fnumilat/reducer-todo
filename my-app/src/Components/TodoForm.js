import React, {Component} from 'react';

class TodoForm extends Component {
    constructor(){
        super();
        this.state = {
            todo: ""
        };
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitTodo = e => {
        e.preventDefault();
        this.props.addTodo(e, this.state.todo);
        this.setState({todo: ""});
    };

    render(){
        console.log("rendering form", this.state.todo);
        return (
            <form className="Form" onSubmit={this.submitTodo}>
                <input className="Form-Input" type="text" name="todo" onChange={this.handleChanges} />
                <button className="Form-Button">Add a Todo</button>
            </form>
        );
    }

};

export default TodoForm;