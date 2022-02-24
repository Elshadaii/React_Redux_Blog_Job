import {
    CREATE_APPLICATION,
    DELETE_APPLICATION,
    RETRIVE_APPLICATIONS
} from "./types";

import ApplicationDataService from "../services/application.service";

export const createApplication = (id) => async(dispatch) => {
    try {
        const res = await ApplicationDataService.create({ job_id: id });
        dispatch({
            type: CREATE_APPLICATION,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveApplications = () => async(dispatch) => {
    try {
        const res = await ApplicationDataService.getAll();
        console.log(res)
        dispatch({
            type: RETRIVE_APPLICATIONS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteJob = (id) => async(dispatch) => {
    try {
        await ApplicationDataService.delete(id);

        dispatch({
            type: DELETE_APPLICATION,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};