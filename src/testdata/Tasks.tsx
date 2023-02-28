import {Task} from '../AST';

const AutomateWindowBlindsAST: Task = {
    kind: "task",
    when: {
        kind: "binaryop",
        operator: "risesAbove",
        lhs: {
            kind: "property",
            device: "weather_station",
            sensor: "temperature",
        },
        rhs: {
            kind: "property",
            device: "thermostat",
            sensor: "temperature",
        },
    },
    if: {
        kind: "binaryop",
        operator: "greaterThan",
        lhs: {
            kind: "property",
            device: "living_room_window",
            sensor: "light_level",
        },
        rhs: {
            kind: "number",
            value: 40,
        },
    },
    action: {
        kind: "actuate",
        device: "living_room_window",
        knob: "close_blinds",
    },
};

export {AutomateWindowBlindsAST}

