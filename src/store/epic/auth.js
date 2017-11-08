import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import Auth from "../constants/auth";
import AuthActions from "../actions/auth";
// import { API_KEY ,SHORTEST_DISTANCE_API} from "../../config/api";
import { HttpService } from "../../services/http";
//** Epic Middlewares For Auth **//
export default class AuthEpic {

    // Epic middleware for login
    // static loginEpic = (action$) =>
    //     action$.ofType(Auth.SIGNIN)
    //         .switchMap(({ payload }) => {
    //             return firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    //             .then((arr) => {
    //                 return AuthActions.signinSuccessful(arr)
    //             })
    //             .catch((err) => AuthActions.signinRejected(err))
    //     })

    //Epic middleware for signup
    // static signupEpic = (action$) =>
    //     action$.ofType(Auth.SIGNUP)
    //         .switchMap(({ payload }) => {
    //             return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
    //                 .then((arr) => {
    //                     return AuthActions.signupupSuccessful(arr)
    //                 })
    //                 .catch((err) => AuthActions.signupRejected(err))
    //         })
}