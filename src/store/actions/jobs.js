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

    static JobDetails(payload) {
        return {
            type: JobsConstants.JOB_DETAILS,
            payload: payload
        }
    }

    static jobsDetailsSuccessfull(jobDetails) {
        return {
            type: JobsConstants.JOB_DETAILS_SUCCESSFUL,
            payload: jobDetails
        }
    }
    static JobDetailsRejected(error) {
        return {
            type: JobsConstants.JOB_DETAILS_REJECTED,
            payload: error
        }
    }

    static appliedJobsList(payload) {
        return {
            type: JobsConstants.APPLIED_JOBS_LIST,
            payload: payload
        }
    }

    static appliedJobsListSuccessful(authUser) {
        console.log(authUser)
        return {
            type: JobsConstants.APPLIED_JOBS_LIST_SUCCESSFUL,
            payload: authUser
        }
    }

    static appliedJobsListRejected(error) {
        return {
            type: JobsConstants.APPLIED_JOBS_LIST_REJECTED,
            payload: error
        }
    }
}