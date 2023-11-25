<script>
  import "../app.css";

  // (1) TODO: Imports Firebase.

  // (2) TODO: Init Firebase app.

  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  // (3) TODO: Import Svelte AuthStore

  // (4) TODO: Init Firebase auth.

  let email = "";

  onMount(() => {
    // (5) TODO: Load current user on page load or redirect to /login if user not loggedIn.
  });

  const handleLogout = () => {
    // (6) TODO: Handle user logout.
  };
</script>

<!-- THIS BOILERPLATE / UI CODE ARE CREATED AS PART OF THIS WORKSHOP DO NOT EDIT OR MODIFIED THIS CORD BELOW  -->

<main>
  <nav class="py-4 border-b shadow px-6 bg-slate-100 flex flex-row justify-between">
    <p class="font-bold text-lg">ToBeIT' 67 - The Second</p>
    {#if $isLoggedIn}
      <div class="flex flex-row gap-4 items-center">
        <p>{email}</p>
        <button class="font-semibold" on:click={handleLogout}>Logout</button>
      </div>
    {/if}
  </nav>

  <slot />

  <footer class="text-sm w-full text-center flex flex-col gap-1 py-6 border-t text-slate-600">
    <p>
      This Website / Project is a part of ToBeIT' 67 - The Second | Firebase Authentication and
      Cloud Firestore Workshop
    </p>
    <p>
      Any resources and teaching materials of this workshop are created by <a
        href="https://github.com/misterfocusth"
        class="underline"
      >
        Sila Pakdeewong (P' Sila)
      </a>
    </p>
    <p>
      Hosted at <a href="https://www.it.kmitl.ac.th/" class="underline"
        >School of Information Technology, KMITL</a
      >
    </p>
  </footer>
</main>
