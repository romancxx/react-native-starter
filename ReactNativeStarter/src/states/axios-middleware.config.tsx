import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const client = Axios.create({
    baseURL: "",
    responseType: "json"
});

export const options = {
    interceptors: {
        request: [
            ({ getState, dispatch }: any, config: AxiosRequestConfig) => {
                const token = getState().auth.jwt;

                if (token === null) {
                    // This means that there ISN'T JWT and no user is logged in.
                    config.headers.Authorization = null;
                } else {
                    // This means that there IS a JWT so someone must be logged in.
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            }
        ],
        response: [
            {
                success: ({ dispatch }: any, response: AxiosResponse) => {
                    // Response interception
                    return response;
                },
                onError: ({ action, error, next, dispatch }: any) => {
                    // propagate failure for further handling
                    const nextAction = {
                        type: "",
                        error,
                        meta: {
                            previousAction: action
                        }
                    };

                    if (action.types && action.types.length === 3) {
                        nextAction.type = action.types[2];
                    } else {
                        nextAction.type = action.type + "_FAIL";
                    }

                    next(nextAction);
                    return nextAction;
                }
            }
        ]
    }
};
