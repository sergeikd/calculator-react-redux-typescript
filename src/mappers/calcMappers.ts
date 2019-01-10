import { ICalcState, IMapDispatchToProps } from "../common/interfaces";

export const mapStateToProps: (state: ICalcState) => ICalcState = state => {
    return {
        value: state.value,
        keys: state.keys,
    };
};

type MapDispatchToPropsType = (dispatch: any) => IMapDispatchToProps; // what FUCKING type is dispatch???

export const mapDispatchToProps: MapDispatchToPropsType = (dispatch) => {
    return {
        addElem: (text: string) => {
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

        showResult: (value: string) => {
            dispatch({
                type: "SHOW_RESULT",
                value,
            });
        }
    };
};