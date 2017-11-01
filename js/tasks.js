import {default as model} from "./model.js";

;(function($) {

    const taskManager = new model.TaskManager();
    const controller = new model.Controller();

    let tasksTemplateProcessor = null;


    function showTasks() {
        $("#containerTasks").html(tasksTemplateProcessor({ tasks: taskManager.tasks }));
    }

    function updateUI() {
        showTasks();
    }


    $(function () {
        tasksTemplateProcessor =  Handlebars.compile($("#tasks-list-template").html());
        $(document).on("click", "input[send]", send);
        $("#createTask").click(
            function () {
                tasksTemplateProcessor.add($("#title").val());
                showTasks();
            });
    updateUI();
    });

})(jQuery);
