const RegisterForm = document.querySelector(".signup-form");
const LoginForm = document.querySelector(".login-form");
const signUpBtn = document.querySelector(".signupbtn");
const LoginBtn = document.querySelector(".loginBtn");
const Register = document.querySelector(".signup");
const login = document.querySelector(".login");
const nameShow = document.querySelector(".name-show");
const emailShow = document.querySelector(".email-show");
const supabaseUrl = "https://asmdqoxecgvlyxwstgyk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzbWRxb3hlY2d2bHl4d3N0Z3lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1ODI0MDYsImV4cCI6MjA1MTE1ODQwNn0.m9DZLk8FX4ElPUb6bQZwz3OPmtfUyjUdKlO0I_8Bqwg";
const supabasefinc = supabase.createClient(supabaseUrl, supabaseKey);
let Auth = false;
const loginandlogout = document.querySelector(".loginandlogout");
// console.log(supabasefinc);

try {
  const GetUser = () => {
    const User = JSON.parse(
      localStorage.getItem("sb-asmdqoxecgvlyxwstgyk-auth-token")
    );
    const Auth = JSON.parse(localStorage.getItem("Auth"));
    Auth
      ? (nameShow.innerHTML = `Wellcome ${User?.user?.user_metadata?.first_name}`)
      : (nameShow.innerHTML = "Please enter your name");
    Auth
      ? (emailShow.innerHTML = `Email : ${User?.user?.user_metadata?.email}`)
      : (nameShow.innerHTML = "Please enter your email");

    if (localStorage.getItem("Auth")) {
      window.location.assign = "./home.html";
      loginandlogout.innerHTML = "Logout";
      return;
    } else {
      window.location.assign = "/";
      return;
    }
  };
  GetUser();
} catch (error) {
  console.log(error);
}

try {
  signUpBtn.addEventListener("click", () => {
    RegisterForm.classList.add("hidden");
    LoginForm.classList.remove("hidden");
  });
  LoginBtn.addEventListener("click", () => {
    RegisterForm.classList.remove("hidden");
    LoginForm.classList.add("hidden");
  });
} catch (error) {
  console.log(error);
}

// console.log(data);
const Regemail = document.querySelector(".email-signup");
const Regpassword = document.querySelector(".password-signup");
const username = document.querySelector("#username");
const CreatUser = async () => {
  const { data, error } = await supabasefinc.auth.signUp({
    email: Regemail.value,
    password: Regpassword.value,
    options: {
      data: {
        first_name: username.value,
      },
    },
  });
  if (error) {
    alert(error.message);
  } else {
    alert(
      "Registration successful! Please check your email for confirmation. !"
    );
    RegisterForm.classList.add("hidden");
    LoginForm.classList.remove("hidden");
    Regemail.value = "";
    Regpassword.value = "";
    console.log(data);
  }
};

const loginEmail = document.querySelector("#login-email");
const loginPassword = document.querySelector("#login-Password");

const Login = async () => {
  const { user, error } = await supabasefinc.auth.signInWithPassword({
    email: loginEmail.value,
    password: loginPassword.value,
  });

  if (error) {
    alert(error.message);
  } else {
    alert("User logged in successfully");
    window.location.replace("home.html");
    RegisterForm.classList.add("hidden");
    LoginForm.classList.remove("hidden");
    loginEmail.value = "";
    loginPassword.value = "";
    Auth = true;
    localStorage.setItem("Auth", JSON.stringify(Auth));
  }
};

try {
  loginandlogout.addEventListener("click", async () => {
    const { error } = await supabasefinc.auth.signOut();
    if (error) {
      alert(error.message);
    } else {
      alert("User logged out successfully");
      window.location.href = "/";
      Auth = false;
      localStorage.removeItem("Auth", JSON.stringify(Auth));
    }
  });
} catch (error) {
  console.log(error);
}

try {
  Register.addEventListener("submit", (e) => {
    e.preventDefault();
    CreatUser();
  });
  login.addEventListener("submit", (e) => {
    e.preventDefault();
    Login();
  });
} catch (error) {
  console.log(error);
}
