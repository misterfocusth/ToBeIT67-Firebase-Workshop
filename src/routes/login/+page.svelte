<script>
  // (1) TODO: Imports Firebase

  // (2) TODO: Init Firebase auth.

  let email = "";
  let password = "";

  const handleLogin = () => {
    // (3) TODO: Handle login
  };
</script>

<!-- THIS BOILERPLATE / UI CODE ARE CREATED AS PART OF THIS WORKSHOP DO NOT EDIT OR MODIFIED THIS CORD BELOW  -->

<div class="flex flex-col items-center justify-center min-h-screen">
  <div class="flex flex-row gap-4">
    <img
      src="https://www.gstatic.com/mobilesdk/230503_mobilesdk/authentication.png"
      alt="firebase"
      class=" w-72"
    />
    <img
      src="https://www.gstatic.com/mobilesdk/230503_mobilesdk/cloud_firestore.png"
      alt="firebase"
      class=" w-72"
    />
  </div>
  <div class="mt-6 text-lg font-bold text-center">
    <p>ToBeIT' 67 - The Second</p>
    <p>Firebase Authentication + Cloud Firestore Workshop</p>
  </div>

  <div class="flex flex-col gap-4 shadow p-4 rounded-lg mt-6">
    <input
      type="text"
      id="email"
      bind:value={email}
      class=" w-96 rounded-lg p-2 border border-slate-400"
      placeholder="Email"
    />

    <input
      type="password"
      id="password"
      bind:value={password}
      class=" w-96 rounded-lg p-2 border border-slate-400"
      placeholder="Password"
    />

    <button class="p-2 mt-4 rounded-lg bg-yellow-500 text-white font-bold" on:click={handleLogin}>
      Login
    </button>

    <p class="text-center">
      Don't have an account yet? <a href="/register" class="underline text-yellow-500 font-semibold"
        >Create an account.</a
      >
    </p>
  </div>
</div>
