const todoInp = document.querySelector("#taskInput");
const AddBtn = document.querySelector("#addTaskButton");
const supabaseUrl = "https://asmdqoxecgvlyxwstgyk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzbWRxb3hlY2d2bHl4d3N0Z3lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1ODI0MDYsImV4cCI6MjA1MTE1ODQwNn0.m9DZLk8FX4ElPUb6bQZwz3OPmtfUyjUdKlO0I_8Bqwg";
const supabaseClients = supabase.createClient(supabaseUrl, supabaseKey);

AddBtn.addEventListener("click", async () => {
  const task = todoInp.value;
  const { data, error } = await supabaseClients
    .from("todos")
    .insert({ task })
    .select();
  if (data) {
    Swal.fire({
      title: "Good job!",
      text: "Your Task has been Added Successfully !",
      icon: "success",
    });
  }
  GetDataShowUi();
  todoInp.value = "";
});
let todos = [];
const GetDataShowUi = async () => {
  const { data, error } = await supabaseClients.from("todos").select();

  todos = data;

  if (data) {
    ul.innerHTML = "";
    data?.forEach((data) => {
      CreatDataSHower(data);
    });
  } else {
    ul.classList.add("flex", "justify-center", "items-center", "mt-10");
    ul.innerHTML = `
    <div role="status" class="mx-auto">
    <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
    `;
  }
};
const DeleteTodo = async (data) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const response = await supabaseClients
        .from("todos")
        .delete()
        .eq("id", data)
        .select();
      GetDataShowUi();
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
};

const ul = document.querySelector(".todo-ul");
const CreatDataSHower = (data) => {
  const li = document.createElement("li");
  const content = `
      
            <div
              class="text-[13px] text-gray-700 cursor-pointer font-normal tracking-[1px] leading-[22px] ${
                data.is_done == true ? "line-through" : "no-underline"
              }"
            >
             ${data.task}
            </div>
            <div class="buttons flex items-center gap-2">
              <button
                class="text-gray-500 w-[34px] h-[30px] rounded-md text-white bg-[#19A2AE] hover:bg-[#138595] text-sm"
               onclick="Check(${data?.id},${data?.is_done})">
                <i class="fa-solid fa-check text-white"></i>
              </button>
              <button
                class="text-gray-50 w-[34px] h-[30px] rounded-md text-white bg-[#19A2AE] hover:bg-[#138595] text-sm"
                onclick="ShowPopup(this, ${data?.id})"
              >
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                class="text-gray-50 w-[34px] h-[30px] rounded-md text-white bg-[#19A2AE] hover:bg-[#138595] text-sm delete-btn"
                onclick="DeleteTodo(${data?.id})"
                >
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
       
    `;

  li.className = `flex items-center justify-between gap-2 border-b-[1px] border-gray-200 hover:bg-[#f5f5f5] py-[8px] px-[25px] cursor-pointer mb-2 rounded-md `;
  li.innerHTML = content;
  ul.appendChild(li);
  ul.className = `${
    todos.length > 5 ? "h-[350px] overflow-y-auto mt-5" : "h-[auto] mt-5"
  }`;
};

GetDataShowUi();
let done = true;

const Check = async (id, data) => {
  if (data === true) {
    await unComplete(id);
  } else {
    await CheckCoplete(id);
  }
};

const CheckCoplete = async (id) => {
  const { data, error } = await supabaseClients
    .from("todos")
    .update({ is_done: true })
    .eq("id", id)
    .select();
  if (data) {
    Swal.fire({
      title: "Good job!",
      text: "Your Task has been completed Successfully !",
      icon: "success",
    });
  }
  GetDataShowUi();
};

const unComplete = async (id) => {
  const { data, error } = await supabaseClients
    .from("todos")
    .update({ is_done: false })
    .eq("id", id)
    .select();
  if (data) {
    Swal.fire({
      title: "Good job!",
      text: "Your Task has been Uncompleted Successfully !",
      icon: "success",
    });
  }
  GetDataShowUi();
};

const popupUi = document.querySelector("#popup");
const ShowPopup = (event, id) => {
  const popup = document.createElement("div");
  popup.innerHTML = `
  <div
      class="fixed grid place-items-center backdrop-blur-sm top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center"
    >
      <div class="relative container m-auto px-6">
        <div class="m-auto md:w-7/12">
          <div class="rounded-xl bg-white dark:bg-gray-800 shadow-xl">
            <div class="p-8">
              <div class="space-y-4">
                <img
                  src="images/todo.png"
                  loading="lazy"
                  class="w-[100px]"
                />
                <h2
                  class="mb-4 text-2xl text-cyan-900 dark:text-white font-bold"
                >
                  Update Your Task
                </h2>
              </div>
              <div
                class="mt-5 grid space-y-4 border-2 border-gray-300 rounded-lg transition duration-300 hover:border-blue-400 focus:bg-blue-50 overflow-hidden py-[10px]"
              >
                <div
                  class="relative flex items-center space-x-4 justify-center"
                >
                  <input
                    type="text"
                    name=""
                    id=""
                    class="w-[100%] h-[100%] px-[14px] focus:outline-none"
                    value="${event.parentElement.parentElement.children[0].innerHTML.trim()}"

                  />
                </div>
              </div>
              <button
                class="group py-[8px] px-6 border-2 border-gray-300 rounded-lg transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 mt-3"
                onclick="UpdateTodo(this,${id})"
              >
                <div
                  class="relative flex items-center space-x-4 justify-center"
                >
                  <span
                    class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition dark:text-white duration-300 group-hover:text-blue-600 sm:text-base"
                    >Update Now
                  </span>
                </div>
              </button>
               <button
                class="group py-[8px] px-6 border-2 border-gray-300 rounded-lg transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 mt-3"
                onclick="CancelButton()"
              >
                <div
                  class="relative flex items-center space-x-4 justify-center"
                >
                  <span
                    class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition dark:text-white duration-300 group-hover:text-blue-600 sm:text-base"
                    >Cancel
                  </span>
                </div>
              </button>
              <div
                class="mt-14 space-y-4 py-3 text-gray-600 dark:text-gray-400 text-center"
              >
                <p class="text-xs">
                  By proceeding, you agree to our
                  <a href="/privacy-policy/" class="underline">Terms of Use</a>
                  and confirm you have read our
                  <a href="/privacy-policy/" class="underline"
                    >Privacy and Cookie Statement</a
                  >.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  ;`;
  popupUi.classList.remove("hidden");
  popupUi.appendChild(popup);
};

const UpdateTodo = async (task, id) => {
  const taskVal =
    task.parentElement.children[1].firstElementChild.firstElementChild.value;
  console.log(id);
  const { data, error } = await supabaseClients
    .from("todos")
    .update({ task: taskVal })
    .eq("id", id)
    .select();
  console.log(data);
  if (data) {
    GetDataShowUi();
    popupUi.innerHTML = "";
    popupUi.classList.add("hidden");
    Swal.fire({
      title: "Task updated!",
      text: "Your Task has been updated Successfully!",
      icon: "success",
    });
  } else {
    Swal.fire({
      title: "Error!",
      text: "Something went wrong while updating the task.",
      icon: "error",
    });
  }
};

const CancelButton = () => {
  popupUi.innerHTML = "";
  popupUi.classList.add("hidden");
};
