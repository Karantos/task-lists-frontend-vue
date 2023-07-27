import http from  "../http-common"

class ListsAppDataService {
    // List methods
    getAllLists() {
        return http.get("api/lists/getAll");
    }

    addList(data) {
        return http.post("api/lists/add", data);
    }

    deleteList(id) {
        return http.delete(`api/lists/delete/${id}`);
    }

    updateList(list) {
        return http.put("api/lists/update", list)
    }

    getList(id) {
        return http.get(`api/lists/get/${id}`)
    }

    // Task methods
    getTask(id) {
        return http.get(`api/lists/getTasks/${id}`)
    }

    addTask(data) {
        return http.post("api/tasks/add", data);
    }

    deleteTask(id) {
        return http.delete(`api/tasks/delete/${id}`)
    }

    updateTask(task) {
        return http.put("api/tasks/update", task)
    }

}

export default new ListsAppDataService();