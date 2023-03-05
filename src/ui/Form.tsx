import React from 'react';
import WhenBox from './WhenBox';
import IfBox from './IfBox';
import ActionBox from './ActionBox';
import {Task, Expr, Action} from '../AST';
import { render, screen } from '@testing-library/react';

type FormProps = {
    task: Task,
}

type FormState = {
    task: Task,
}

class Form extends React.Component<FormProps, FormState> {
    constructor(props: FormProps) {
        super(props);
        this.state = {
            task: props.task,
        }

        this.handleWhenExpressionChanged = this.handleWhenExpressionChanged.bind(this);
        this.handleIfExpressionChanged = this.handleIfExpressionChanged.bind(this);
        this.handleActionChanged = this.handleActionChanged.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    render(){
        return(<div>
            <WhenBox expr={this.props.task.when} onExprChanged={this.handleWhenExpressionChanged}/>
            <br/>
            <IfBox expr={this.props.task.if} onExprChanged={this.handleIfExpressionChanged} />
            <br/>
            <ActionBox action={this.props.task.action} onActionChanged={this.handleActionChanged} />
            <br/>
            <button onClick={this.handleOnClick}> Save </button>
        </div>);
    }

    // Added test for the Form component
    test('renders a form with three input boxes', () => {
        const { getByLabelText } = render(<Form />);
        const whenBox = getByLabelText(/When/i);
        const ifBox = getByLabelText(/If/i);
        const actionBox = getByLabelText(/Action/i);
        expect(whenBox).toBeInTheDocument();
        expect(ifBox).toBeInTheDocument();
        expect(actionBox).toBeInTheDocument();
    });

    handleWhenExpressionChanged(expr: Expr|null) {
        let newTask = {
            ...this.state.task,
            when: expr,
        } as Task;
        this.setState({
            ...this.state,
            task: newTask,
        });
    }

    handleIfExpressionChanged(expr: Expr|null) {
        let newTask = {
            ...this.state.task,
            if: expr,
        } as Task;
        this.setState({
            ...this.state,
            task: newTask,
        });
    }

    handleActionChanged(action: Action) {
        let newTask = {
            ...this.state.task,
            action: action,
        } as Task;
        this.setState({
            ...this.state,
            task: newTask,
        });
    }

    handleOnClick() {
        console.log(this.state.task);
    }
}

export default Form;