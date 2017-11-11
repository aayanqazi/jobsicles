import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import Auth from "../constants/auth";
import AuthActions from "../actions/auth";
import { Path } from "../../config/path";
// import { API_KEY ,SHORTEST_DISTANCE_API} from "../../config/api";
import { HttpService } from "../../services/http";
//** Epic Middlewares For Auth **//
export default class AuthEpic {

    // Epic middleware for login
    // static loginEpic = (action$) =>
    //     action$.ofType(Auth.SIGNIN)
    //         .switchMap(({ payload }) => {
    //             return HttpService.get(Path.URL + '/get_nonce/?controller=user&method=register')
    //                 .then((arr) => {
    //                     console.log(arr)
    //                     return AuthActions.signupupSuccessful(arr)
    //                 })
    //                 .catch(err => {
    //                     console.log(err)
    //                     return AuthActions.signupupSuccessful(err)
    //                 })
    //         })

    //Epic middleware for signup
    static signupEpic = (action$) =>
        action$.ofType(Auth.SIGNUP)
            .switchMap(({ payload }) => {
                return HttpService.get(Path.URL + '/get_nonce/?controller=user&method=register')
                    .switchMap(({response}) => {
                        return HttpService.get(Path.URL+`/user/register/?username=${payload.username}&email=${payload.email}&nonce=${response.nonce}&display_name=${payload.username}&user_pass=${payload.password}&role=${payload.role}`)
                        .map((arr)=>{
                            return AuthActions.signupupSuccessful(arr)                            
                        }).catch(err=>AuthActions.signupRejected(err)
                        )
                    })
            })
}