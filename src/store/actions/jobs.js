import JobsConstants from "../constants/jobs";

export default class JobsActions {

    static alljobs(payload) {
        return {
            type: JobsConstants.ALL_JOBS,
            payload: payload
        }
    }

    static alljobsSuccessful(authUser) {
        console.log(authUser)
        return {
            type: JobsConstants.ALL_JOBS_SUCCESSFUL,
            payload: authUser
        }
    }

    static alljobsRejected(error) {
        return {
            type: JobsConstants.ALL_JOBS_REJECTED,
            payload: error
        }
    }

}