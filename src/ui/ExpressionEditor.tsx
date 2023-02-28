import React from 'react';
import {Expr} from '../AST'
import NodeBlock from './NodeBlock';

type EditorProps = {
    expr: Expr|null
    onExprChange:  (expr: Expr|null) => void,
}

type EditorState = {
    expr: Expr|null
}

class ExpressionEditor extends React.Component<EditorProps, EditorState> {
    constructor(props: EditorProps) {
        super(props);
        this.state = {
            expr: props.expr,
        }

        this.handleExpressionChange = this.handleExpressionChange.bind(this);
    }

    componentWillReceiveProps(nextProp: EditorProps) {
        if (this.props.expr != nextProp.expr) {
            this.setState({
                expr: nextProp.expr
            });
        }
    }

    render() {
        return(<div>
            <NodeBlock expr={this.props.expr} onNodeChange={this.handleExpressionChange} />
        </div>);
    }

    handleExpressionChange(expr: Expr|null) {
        this.props.onExprChange(expr);
        this.setState({
            expr: expr
        });
    }
}

export default ExpressionEditor;