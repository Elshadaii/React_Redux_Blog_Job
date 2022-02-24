import {
    CREATE_APPLICATION,
    RETRIEVE_APPLICATIONS,

    DELETE_APPLICATION,

} from "../actions/types";

const initialState = [];

function applicationReducer(jobs = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_APPLICATION:
            return [...jobs, payload];

        case RETRIEVE_APPLICATIONS:
            return payload;

        case DELETE_APPLICATION:
            return jobs.filter(({ id }) => id !== payload.id);

        default:
            return jobs;
    }
}

export default applicationReducer;