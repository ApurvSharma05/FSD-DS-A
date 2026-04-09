const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const showLogin = document.getElementById("showLogin");
const showRegister = document.getElementById("showRegister");
const message = document.getElementById("message");
const profileCard = document.getElementById("profileCard");
const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const logoutBtn = document.getElementById("logoutBtn");

const API_BASE = "/api/auth";

function setMessage(text, type = "") {
  message.textContent = text;
  message.className = `message ${type}`.trim();
}

function setActiveTab(tabName) {
  const showLoginTab = tabName === "login";

  loginForm.classList.toggle("hidden", !showLoginTab);
  registerForm.classList.toggle("hidden", showLoginTab);

  showLogin.classList.toggle("active", showLoginTab);
  showRegister.classList.toggle("active", !showLoginTab);

  setMessage("");
}

function renderUser(user) {
  if (!user) {
    profileCard.classList.add("hidden");
    return;
  }

  profileCard.classList.remove("hidden");
  profileName.textContent = `Name: ${user.name}`;
  profileEmail.textContent = `Email: ${user.email}`;
}

async function callApi(url, body, token) {
  const response = await fetch(url, {
    method: body ? "POST" : "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}

async function loadProfile() {
  const token = localStorage.getItem("token");

  if (!token) {
    renderUser(null);
    return;
  }

  try {
    const data = await callApi(`${API_BASE}/me`, null, token);
    renderUser(data.user);
    setMessage(`Welcome back, ${data.user.name}!`, "success");
  } catch (error) {
    localStorage.removeItem("token");
    renderUser(null);
    setMessage("Session expired. Please login again.", "error");
  }
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setMessage("Signing in...");

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  try {
    const data = await callApi(`${API_BASE}/login`, { email, password });
    localStorage.setItem("token", data.token);
    renderUser(data.user);
    setMessage(`Logged in as ${data.user.name}.`, "success");
    loginForm.reset();
  } catch (error) {
    setMessage(error.message, "error");
  }
});

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setMessage("Creating account...");

  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value;

  try {
    const data = await callApi(`${API_BASE}/register`, { name, email, password });
    localStorage.setItem("token", data.token);
    renderUser(data.user);
    setMessage(`Account created for ${data.user.name}.`, "success");
    registerForm.reset();
    setActiveTab("login");
  } catch (error) {
    setMessage(error.message, "error");
  }
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("token");
  renderUser(null);
  setMessage("Logged out.", "success");
});

showLogin.addEventListener("click", () => setActiveTab("login"));
showRegister.addEventListener("click", () => setActiveTab("register"));

setActiveTab("login");
loadProfile();
