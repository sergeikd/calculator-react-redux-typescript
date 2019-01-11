export interface ICalcState {
    value: string;
}

export interface IMapDispatchToProps {
    addElem: (text: string) => void;
    clear: () => void;
    showResult: (value: string) => void;
}