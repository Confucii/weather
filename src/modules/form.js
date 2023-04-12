export default function renderForm() {
  const form = document.createElement("form");

  const text = document.createElement("input");
  text.setAttribute("type", "text");

  const btn = document.createElement("button");
  btn.textContent = "See Weather";
  btn.classList.add("fetch");

  form.appendChild(text);
  form.appendChild(btn);
  document.body.appendChild(form);
}
