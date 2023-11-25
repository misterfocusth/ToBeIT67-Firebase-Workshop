<script>
  // @ts-nocheck
  import {
    addDoc,
    collection,
    doc,
    getDocs,
    getFirestore,
    updateDoc,
    deleteDoc,
    where,
    query,
  } from "firebase/firestore";
  import { onMount } from "svelte";

  // Firestore
  const db = getFirestore();

  let userId = "";
  let newToDo = "";

  let todos = [];

  onMount(async () => {
    userId = localStorage.getItem("uid");
    const queryOption = query(collection(db, "todos"), where("userId", "==", userId));
    const querySnapshot = await getDocs(queryOption);
    const currentToDos = [];
    querySnapshot.forEach((doc) => {
      currentToDos.push({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt.toDate(),
        updatedAt: doc.data().updatedAt.toDate(),
      });
    });
    todos = [...currentToDos];
  });

  let newValue = "";

  const handleAddNewToDo = () => {
    if (!newToDo) return;

    const newToDoData = {
      userId,
      content: newToDo,
      isDone: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    addDoc(collection(db, "todos"), newToDoData)
      .then((doc) => {
        todos = [...todos, { ...newToDoData, id: doc.id }];
        newToDo = "";
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleSave = (id) => {
    const docRef = doc(db, "todos", id);
    updateDoc(docRef, { content: newValue })
      .then(() => {
        const targetIndex = todos.findIndex((todo) => todo.id === id);
        todos[targetIndex] = {
          ...todos[targetIndex],
          content: newValue,
        };
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleMarkAsDone = (id) => {
    const docRef = doc(db, "todos", id);
    updateDoc(docRef, { isDone: true })
      .then(() => {
        const targetIndex = todos.findIndex((todo) => todo.id === id);
        todos[targetIndex] = {
          ...todos[targetIndex],
          isDone: true,
        };
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleDelete = (id) => {
    const docRef = doc(db, "todos", id);
    deleteDoc(docRef)
      .then(() => {
        const filteredToDos = todos.filter((todo) => todo.id !== id);
        todos = [...filteredToDos];
      })
      .catch((error) => {
        alert(error);
      });
  };
</script>

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
