import { Dispatch } from "redux";
import { ICalcState, IMapDispatchToProps } from "../common/interfaces";

export const mapStateToProps: (state: ICalcState) => ICalcState = state => {
    return {
        value: state.value,
    };
};

type MapDispatchToPropsType = (dispatch: Dispatch) => IMapDispatchToProps;

export const mapDispatchToProps: MapDispatchToPropsType = (dispatch) => {
    return {
        addElem: (text: string) => () => {
            dispatch({
                type: "ADD_DIGIT_OR_OPERATION",
                text,
            });
        },

        clear: () => {
            dispatch({
                type: "CLEAR"
            });
        },

        showResult: (value: string) => () => {
            dispatch({
                type: "SHOW_RESULT",
                value,
            });
        }
    };
};