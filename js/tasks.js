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


    $(document).on("click", "input[createTask]", controller.send());
    $(document).on("click", "input[cancelEdit]", controller.cancel());



    $(function () {
        tasksTemplateProcessor =  Handlebars.compile($("#tasks-list-template").html());
        $(document).on("click", "input[send]", controller.send);
        $("#createTask").click(
            function () {
                tasksTemplateProcessor.add($("#title").val());
                showTasks();
            });
    updateUI();
    });

})(jQuery);
