<template>
  <div class="container">
    <!-- Form -->
    <form @submit.prevent="handleSubmit" class="login-form">
      <h1>Sign in</h1>
      <p style="color: #838383">Login by entering your username and password.</p>
      <!-- Username input field -->
      <div class="form-group">
        <label for="username">Username</label>
        <div class="input-container">
          <i class="material-icons-outlined">person</i>
          <input
            id="username"
            type="text"
            v-model="username"
            placeholder="Enter your username"
        />
        </div>
      </div>

      <!-- Password input field -->
      <div class="form-group">
        <label for="password">Password</label>
        <div class="input-container">
          <i class="material-icons-outlined">lock</i>
          <input
              id="password"
              type="password"
              v-model="password"
              placeholder="Enter your password"
          />
        </div>
      </div>

      <!-- Forgot Password link -->
      <div class="forgot-password">
        <a href="/forgot-password" class="forgot-password-link">
          Forgot password?
        </a>
      </div>

      <!-- Submit button -->
      <button type="submit" class="login-button">Log in</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: "", // Holds the username input
      password: "", // Holds the password input
    };
  },
  methods: {
    handleSubmit() {
      console.log("Login submitted with", {
        username: this.username,
        password: this.password,
      });
      // Add actual logic for handling login here
    }
  }
};
</script>

<style scoped>
input, textarea, select {
  font-family: 'Source Sans 3', sans-serif;
}
.container {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding: 20px;
  box-sizing: border-box;
}

.login-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #838383;
}

input {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Style the Login Form Button */
.login-button {
  font-family: 'Source Sans 3', sans-serif; /* Apply font */
  width: 100%;
  height: 60px;
  background-color: #333;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s ease;
}

/* Hover effect for the button */
.login-button:hover {
  background-color: #555; /* Slightly lighter grey on hover */
}

.input-container {
  position: relative;
}

.input-container i {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: grey;
  font-size: 20px;
  pointer-events: none;
}

.input-container input {
  height: 50px;
  padding-left: 35px;
  font-size: 14px;
  border: 2px solid #d5d3d3;
  border-radius: 4px;
  width: 100%; /* Full width input field */
  box-sizing: border-box; /* Include padding and border in width */
}

/* Styling for the Forgot Password link */
.forgot-password {
  margin-top: 10px; /* Add some space above the link */
  text-align: left; /* Align the link to the right side */
}

.forgot-password-link {
  font-size: 16px; /* Slightly smaller font size */
  color: #5e5e5e; /* Grey color */
  text-decoration: none; /* Remove underline by default */
}

</style>