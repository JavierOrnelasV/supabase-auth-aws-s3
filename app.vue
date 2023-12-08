<template>
  <div class="topbar">
    <div class="left-content">
      <NuxtLink to="/">Home</NuxtLink>
    </div>
    <div class="right-content">
      <NuxtLink to="/login">Login</NuxtLink>
      <NuxtLink to="/signup">Signup</NuxtLink>
    </div>
  </div>
  <div class="container">
    <NuxtPage />
  </div>
</template>

<style>
body {
  background-color: #0f172a;
  color: #ffffff;
  margin: 0;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

a {
  color: #ffffff;
  text-decoration: none;
}

a:hover {
  color: #bbbbbb;
}

h1 {
  margin: 0;
}

.container {
  padding: 1rem 10rem;
}

.topbar {
  background-color: #0f172a;
  display: flex;
  backdrop-filter: blur(12px);
  height: 3.5rem;
  font-size: 1rem;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #1e293b;
  padding: 0 10rem;
  font-weight: 500;
}

.left-content {
  display: flex;
  align-items: center;
  flex-grow: 1;
  column-gap: 1rem;
}

.right-content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 1rem;
}
</style>
