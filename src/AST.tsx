export type Expr = UnaryOp | BinaryOp | Property | Literal
export type LiteralKind = "boolean" | "number" | "string"
export type Action = Actuate | Notify

// Represents a task
export interface Task {
    kind: "task";
    when: Expr; // Expr must have type Event
    if: Expr; // Expr must have type boolean
    action: Action;
}

// Represents a value
export interface Literal {
    kind: LiteralKind;
    value: boolean | number | string;
}

// Represents the value of the specified
// sensor on the device.
export interface Property {
    kind: "property";
    device: string;
    sensor: string;
}

// Represents unary operation (on only one thing)
export interface UnaryOp {
    kind: "unaryop";
    operator: string;
    arg: Expr;
}
    
// Represents binary operation (two things)
export interface BinaryOp {
    kind: "binaryop";
    operator: string;
    lhs: Expr;
    rhs: Expr;
}

export interface Notify {
    kind: "notify";
    channel: string;
    message: string;
}

// Represents actuating the specified knob on the device.
export interface Actuate {
    kind: "actuate";
    device: string;
    knob: string;
}
