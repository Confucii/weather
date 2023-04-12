import renderForm from "./form";

export default function renderMain() {
  const mainContent = document.createElement("div");
  mainContent.classList.add("content");

  mainContent.appendChild(renderForm());

  document.body.appendChild(mainContent);
}
