var apiResponse = {
    success: (res, data = {}, success = true, status_code = 200,  message = "Request process successfully",) => {
        res.setHeader("Content-Type", "application/json");
        return res.status(data?.status_code ?? status_code).json({success:success, status_code:status_code, message:message, ...data});
    },


    error: (res, data = null, success = false, status_code = 400,  message = "Something went wrong!") => {
        res.setHeader("Content-Type", "application/json");
        return res.status(data?.status_code ?? status_code).json({success:success, status_code:status_code, message:message, ...data});
    }
};

global.apiResponse = apiResponse;