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
                return HttpService.get(`https://jobsicle.mv/web_Api.php?tokenID=123&paged=${payload}`)
                    .map((arr) => {
                        if (arr.response) {
                            return JobActions.alljobsSuccessful(arr.response.record)
                        }
                        else {
                            return JobActions.alljobsRejected("End")
                        }
                    })
            })

    static JobDetailsEpic = (action$) =>
        action$.ofType(Jobs.JOB_DETAILS)
            .switchMap(({ payload }) => {
                return HttpService.get(Path.URL + `/https://jobsicle.mv/?post_type=noo_job&p=13398&json=1${payload}`)
                    .map((arr) => {
                        return JobActions.jobsDetailsSuccessfull(arr.response.posts)
                    })
                    .catch(err => {
                        console.log(err);
                        return JobActions.JobDetailsRejected(err)
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