import React from 'react';
import {Expr} from '../AST';
import {ExpressionParser} from '../utils/parser';
import ExpressionEditor from './ExpressionEditor';

type IfBoxProps = {
    expr: Expr|null
    onExprChanged: (expr: Expr|null) => void
}

type IfBoxState = {
    expr: Expr|null
}

class IfBox extends React.Component<IfBoxProps, IfBoxState> {
    constructor(props: IfBoxProps) {
        super(props);
        this.state = {
            expr: props.expr,
        }

        this.handleExpressionChange = this.handleExpressionChange.bind(this);
    }

    render() {
        let parser: ExpressionParser = new ExpressionParser(this.state.expr);
        return(<div>
            <div>
                If: {parser.parseExpressionToString()}
            </div>
            <ExpressionEditor
                expr={this.state.expr}
                onExprChange={this.handleExpressionChange}/>
        </div>);
    }

    handleExpressionChange(newExpr: Expr|null) {
        this.props.onExprChanged(newExpr);
        this.setState({
            expr: newExpr
        });
    }
}

export default IfBox;