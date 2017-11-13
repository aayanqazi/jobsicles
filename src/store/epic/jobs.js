import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import Jobs from "../constants/jobs";
import JobActions from "../actions/jobs";
import { Path } from "../../config/path";
// import { API_KEY ,SHORTEST_DISTANCE_API} from "../../config/api";
import { HttpService } from "../../services/http";
//** Epic Middlewares For Auth **//
export default class JobEpic {

    // Epic middleware for login
    static allJobsEpic = (action$) =>
        action$.ofType(Jobs.ALL_JOBS)
            .switchMap(({ payload }) => {
                return HttpService.get(Path.URL +`/get_posts/?post_type=noo_job&count=${payload}`)
                    .map((arr) => {
                        console.log(arr);
                        return JobActions.alljobsSuccessful(arr.response.posts)
                    })
                    .catch(err => 
                        {
                            console.log(err);                            
                            return JobActions.alljobsRejected(err)
                        }
                    )
            })

    //Epic middleware for signup
    // static signupEpic = (action$) =>
    //     action$.ofType(Auth.SIGNUP)
    //         .switchMap(({ payload }) => {
    //             return HttpService.get(Path.URL + '/get_nonce/?controller=user&method=register')
    //                 .switchMap(({ response }) => {
    //                     return HttpService.get(Path.URL + `/user/register/?username=${payload.username}&email=${payload.email}&nonce=${response.nonce}&display_name=${payload.username}&user_pass=${payload.password}&role=${payload.role}`)
    //                         .map((arr) => {
    //                             return AuthActions.signupupSuccessful(arr)
    //                         }).catch(err => AuthActions.signupRejected(err)
    //                         )
    //                 })
    //         })
}