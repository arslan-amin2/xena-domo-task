export const errorHandler = async (err, req, res, next) => {
    console.log(err);
    res
        .status(err.statusCode || 500)
        .json({
            message: err.message || "Unknown Error Occur",
            error: err.error || {},
        })
}