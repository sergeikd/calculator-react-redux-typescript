import { ICalcState } from "../common/interfaces";

interface ICalcAction {
    type: string;
    [payload: string]: string;
}

type CalcReducer = (state: ICalcState | undefined, action: ICalcAction) => ICalcState;

const initialState: ICalcState = {
    value: "0",
    keys: ["7", "8", "9", "-", "4", "5", "6", "/", "1", "2", "3", "*", "0", "C", "=", "+"],
};

export const calcReducer: CalcReducer = (state = initialState, action: ICalcAction) => {
    switch (action.type) {
        case "ADD_DIGIT_OR_OPERATION":
            return {
                ...state,
                value: state.value === "0" ? action.text : state.value + action.text,
            };
        case "CLEAR":
            return {
                ...state,
                value: "0",
            };
        case "SHOW_RESULT":
            return {
                ...state,
                /* tslint:disable-next-line */
                value: eval(action.value),
            };
        default:
            return state;
    }
};