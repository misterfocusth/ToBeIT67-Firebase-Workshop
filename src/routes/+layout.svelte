<script>
  // @ts-nocheck

  import "../app.css";

  // Init Firebase
  import app from "$lib/firebase";

  import { onMount } from "svelte";
  import { isLoggedIn } from "../stores/authStore";

  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
  import { goto } from "$app/navigation";

  const auth = getAuth();
  let email = "";

  onMount(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        email = localStorage.getItem("email");
        isLoggedIn.set(true);
      } else {
        isLoggedIn.set(false);
        goto("/login");
      }
    });
  });

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        goto("/login");
      })
      .catch((error) => {
        alert(error);
      });
  };
</script>

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
