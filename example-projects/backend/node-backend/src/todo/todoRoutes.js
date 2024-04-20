import BackendError from "../errors/backendError";

function todoRoutes(router, service) {

    function handleError(error, res) {
        if (error instanceof BackendError) {
            res.status(500).send("Internal error");
        } else {
            res.status(400).send("User error");
        }
    }

    router.get("/todos", function(req, res) {
        try {
            const todos = service.getTodos();
            res.send(todos);
        } catch(error) {
            console.error("Could not get todos from service: %s", error);
            handleError(error, res)
        }
    });

    router.get("/todos/:ids", function(req,res) {
        try {
            const ids = req.params.ids;
            const todos = service.getTodos(ids);
            res.send(todos);
        } catch (error) {
            console.error("Could not get todos with ids %s from service: %s", ids, error);
            handleError(error, res)
        }
    });
}

export default todoRoutes;
