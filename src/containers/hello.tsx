import Hello from '../components/hello';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

import {
    incrementEnthusiasm,
    decrementEnthusiasm
} from '../store/app';

// export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {

export function mapStateToProps( state : any) {

    const appState : StoreState = state.app;

    return {
        enthusiasmLevel: appState.enthusiasmLevel,
        name: appState.languageName,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<StoreState>) {
    return {
        onIncrement: () => dispatch(incrementEnthusiasm()),
        onDecrement: () => dispatch(decrementEnthusiasm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
