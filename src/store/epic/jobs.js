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
                return HttpService.get(`https://jobsicle.mv/web_Api.php?tokenID=123&paged=${payload.page}&userID=${payload.id}`)
                    .map((arr) => {
                        console.log(arr);
                        if (arr.response.message !== "no record found") {
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
                return HttpService.get(Path.URL + `.php?action=get_job_detail&tokenID=123&jobID=${payload}`)
                    .map((arr) => {
                        console.log(arr);
                        return JobActions.jobsDetailsSuccessfull(arr.response.record)
                    })
                    .catch(err => {
                        console.log(err);
                        return JobActions.JobDetailsRejected(err)
                    }
                    )
            })

    static MyJobAppliedEpic = (action$) =>
        action$.ofType(Jobs.APPLIED_JOBS_LIST)
            .switchMap(({ payload }) => {
                return HttpService.get(Path.URL + `.php?action=view_applied_jobs&tokenID=123&userID=${payload}`)
                    .map((arr) => {
                        console.log(arr);
                        return JobActions.appliedJobsListSuccessful(arr.response.record)
                    })
                    .catch(err => {
                        console.log(err);
                        return JobActions.appliedJobsListRejected(err)
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