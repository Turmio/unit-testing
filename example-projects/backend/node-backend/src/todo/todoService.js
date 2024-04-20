import BackendError from "../errors/backendError"

function todoService(todoModel){
    return {
        getAll: function() {
            try {
                return todoModel.getAllTodos();
            } catch (error) {
                console.log("Could not get Todos from model: %s", error);
                throw new BackendError()
            }
        },
        getById: function (ids) {
            todoModel.getById(ids)
        }
    };
} 

export default todoService;