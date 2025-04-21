<template>
  <div class="container">
    <!-- Login Form Section -->
    <div class="login-section">
      <div class="login-form">
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
      </div>
    </div>

    <!-- Right Green Section -->
    <div class="right-section">
      <h1>New Here?</h1>
      <p>Sign up and discover a great amount of new opportunities!</p>
      <button class="sign-up-button">Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log("Login submitted with", {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
/* Full height container for the entire layout */
.container {
  display: flex; /* Flexbox for side-by-side layout */
  width: 100%;
  height: 100vh; /* Full viewport height */
  background-color: #ffffff; /* Page background */
  margin: 0; /* Ensure no margins pushing container inward */
  padding: 0; /* Reset padding if necessary */
  box-sizing: border-box;
}

/* Login Section */
.login-section {
  flex: 1; /* Take up the remaining space */
  display: flex; /* Center the login form inside the section */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding: 30px; /* Add some padding */
  box-sizing: border-box;
}

/* Login Form */
.login-form {
  width: 100%;
  max-width: 400px;
  transform: translate(-50%, -20%);
  box-sizing: border-box;
}


/* Remove Input fields and labels styling remains the same */
.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #838383;
}

/* Style for input fields */
input {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Login Button Styling */
.login-button {
  width: 100%;
  height: 70px;
  padding: 0 20px;
  background-color: #333;
  color: white;
  font-size: 22px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #555;
}

/* Input containers */
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
  width: 100%;
  box-sizing: border-box;
}

/* Forgot Password Styling */
.forgot-password {
  margin-top: 10px;
  text-align: left;
}

.forgot-password-link {
  font-size: 16px;
  color: #5e5e5e;
  text-decoration: none;
}

/* Green Right Section */
.right-section {
  width: 500px;
  background-color: #28a745;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  box-sizing: border-box;
}

.sign-up-button {
  width: 50%;
  background-color: white; /* White background */
  color: black; /* Black text color */
  font-size: 16px; /* Medium font size */
  padding: 12px 24px; /* Padding for button size */
  border: 2px solid #d5d3d3; /* Black border */
  border-radius: 8px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  margin-top: 15px; /* Space above the button */
  transition: all 0.3s ease; /* Smooth transition for hover effect */
}

.sign-up-button:hover {
  background-color: black; /* Invert background color */
  color: white; /* Invert text color */
}
</style>