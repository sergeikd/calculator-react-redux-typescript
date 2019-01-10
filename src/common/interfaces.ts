export interface ICalcState {
    value: string;
    keys: string[];
}
export interface ICalcProps extends IMapDispatchToProps {
    value: string;
    keys: string[];
}

export interface IMapDispatchToProps {
    addElem: (text: string) => void;
    clear: () => void;
    showResult: (value: string) => void;
}