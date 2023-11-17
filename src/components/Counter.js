// import { connect } from "react-redux";
import {inc, dec, rnd} from  '../actions';
import { useSelector, useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";

const Counter = () => {

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={() => dispatch(dec())} className="btn btn-primary">DEC</button>
            <button onClick={() => dispatch(inc())} className="btn btn-primary">INC</button>
            <button onClick={() => dispatch(rnd())} className="btn btn-primary">RND</button>
        </div>
    )
}

// const mapSateToProps = (state) => {
//     return {
//         counter: state.value
//     }
// }
// // console.log({...actions});
// // const mapdispatchToProps = (dispatch) => {
// //     const {inc, dec, rnd} = bindActionCreators(actions, dispatch)
// //     return {
// //         inc,
// //         dec,
// //         rnd: () => {
// //             const value = Math.floor(Math.random() * 10);
// //             rnd(value);
// //         }
// //     }
// // }

// export default connect(mapSateToProps, actions)(Counter);
export default Counter;