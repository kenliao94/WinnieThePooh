import {Expr} from '../AST';
import { SupportedKind } from './constants';

function flattenExpression(expr: Expr|null): Expr[] {
    // Traverse the expr and flatten it out
    if (expr == null) {
        return [];
    }

    let arr: Expr[] = []
    dfs(expr, arr);

    return arr;
}

function dfs(expr: Expr | null, arr: Expr[]) {
    if (expr == null) {
        return;
    }
    if (expr.kind == SupportedKind.BINARY_OP) {
        dfs(expr.lhs, arr);
        arr.push(expr);
        dfs(expr.rhs, arr);

    } else if (expr.kind == SupportedKind.UNARY_OP) {
        arr.push(expr);
        dfs(expr.arg, arr);
    } else if (expr.kind == SupportedKind.PROPERTY
               || expr.kind == SupportedKind.BOOLEAN
               || expr.kind == SupportedKind.NUMBER
               || expr.kind == SupportedKind.STRING) {
        arr.push(expr);
    } else {
        throw new Error("Unsupported node");
    }
}

export {flattenExpression}