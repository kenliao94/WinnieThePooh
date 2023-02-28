import React from 'react';
import {Action} from '../AST';
import {ActionParser} from '../utils/parser';
import ActionEditor from './ActionEditor';


type ActionBoxProps = {
    action: Action
    onActionChanged: (action: Action) => void
}

type ActionBoxState = {
    action: Action
}

class ActionBox extends React.Component<ActionBoxProps, ActionBoxState> {
    constructor(props: ActionBoxProps) {
        super(props);
        this.state = {
            action: props.action,
        }

        this.handleActionChanged = this.handleActionChanged.bind(this);
    }

    render() {
        let parser: ActionParser = new ActionParser(this.state.action);
        return(<div>
            <div>
                Action: {parser.parseActionToString()}
                <ActionEditor action={this.state.action} onActionChanged={this.handleActionChanged}/>
            </div>
        </div>);
    }

    handleActionChanged(action: Action) {
        this.props.onActionChanged(action);
        this.setState({
            action: action,
        });
    }
}

export default ActionBox;