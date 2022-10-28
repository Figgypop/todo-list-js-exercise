
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function () {
      console.log(`${task.title} has${task.complete ? " " : " not "} been completed`);
    },

    markCompleted: function () {
      task.complete = true;
    }

  };

  return task

}


// DRIVER CODE BELOW

const task1 = newTask("Clean cat litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const task3 = newTask("Give kitty catnip", "😻")
const tasks = [task1, task2, task3];

console.log(tasks);

task3.logState();
task3.markCompleted();
task3.logState();
