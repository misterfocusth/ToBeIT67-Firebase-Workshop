<script>
  // (1) TODO: Imports firebase.

  import { onMount } from "svelte";

  // (2) TODO: Init Firesotre DB.

  let userId = "";
  let newToDo = "";
  let newValue = "";

  let todos = [];

  onMount(async () => {
    // (3) TODO: Handle load user todos.
  });

  const handleAddNewToDo = () => {
    // (4) TODO: Handle add new todo.
  };

  const handleSave = (id) => {
    // (5) TODO: Handle save todo content when edited.
  };

  const handleMarkAsDone = (id) => {
    // (6) TODO: Handle mark todo as done.
  };

  const handleDelete = (id) => {
    // (7) TODO: Handle delete todo.
  };
</script>

<!-- THIS BOILERPLATE / UI CODE ARE CREATED AS PART OF THIS WORKSHOP DO NOT EDIT OR MODIFIED THIS CORD BELOW  -->

<div class="min-h-screen flex flex-col items-center justify-center py-12">
  <h1 class="text-xl font-bold">ToDoList App</h1>

  <div class="flex flex-col gap-4 shadow p-4 rounded-lg mt-6">
    <textarea
      id="newToDo"
      bind:value={newToDo}
      class=" w-96 rounded-lg p-2 border border-slate-400"
      placeholder="Insert your new todo here!"
    />
    <button class="p-2 rounded-lg bg-yellow-500 text-white font-bold" on:click={handleAddNewToDo}>
      + Add New ToDo
    </button>
  </div>

  <div class="mt-12 grid grid-cols-2 gap-6">
    {#each todos as todo, index}
      <div class="flex flex-col gap-4 shadow p-4 rounded-lg col-span-1">
        <p>
          ToDo No. <span class="font-semibold">{index + 1}</span>
          {#if todo.isDone}
            <span class="text-green-500 font-semibold">(Done)</span>
          {/if}
        </p>
        <textarea
          id="newToDo"
          value={todo.content}
          disabled={todo.isDone}
          class=" w-96 rounded-lg p-2 border border-slate-400"
          placeholder="Insert your new todo here!"
          on:change={(event) => {
            newValue = event.currentTarget.value;
          }}
        />

        <div class="flex flex-row justify-between items-center">
          <p class="text-sm">{new Date(todo.updatedAt).toLocaleString("th-th")}</p>

          <div class="flex flex-row gap-2">
            {#if !todo.isDone}
              <button class="bg-yellow-300 p-1 rounded-lg px-2" on:click={() => handleSave(todo.id)}
                >Save</button
              >
              <button
                class=" bg-green-300 p-1 rounded-lg px-2"
                on:click={() => handleMarkAsDone(todo.id)}>Done</button
              >
            {/if}
            <button class="bg-red-300 p-1 rounded-lg px-2" on:click={() => handleDelete(todo.id)}
              >Delete</button
            >
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
