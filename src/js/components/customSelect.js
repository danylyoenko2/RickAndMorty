// export const customSelect = () => {
//   const selects = document.querySelectorAll("[data-select]");

//   selects.forEach((select) => {
//     const trigger = select.querySelector("[data-select-trigger]");
//     const text = select.querySelector("[data-select-text]");
//     const options = select.querySelectorAll(".filter-form__option");
//     const input = select.querySelector(`[name="${select.dataset.name}Filter"]`);

//     trigger.addEventListener("click", (e) => {
//       e.stopPropagation();

//       document
//         .querySelectorAll("[data-select]")
//         .forEach((s) => s.classList.remove("is-open"));

//       select.classList.toggle("is-open");
//     });

//     options.forEach((option) => {
//       option.addEventListener("click", () => {
//         text.textContent = option.textContent;
//         input.value = option.dataset.value;

//         input.dispatchEvent(new Event("change"));

//         options.forEach((o) => o.classList.remove("selected"));
//         option.classList.add("selected");

//         select.classList.remove("is-open");
//       });
//     });
//   });
// };

// document.addEventListener("click", () => {
//   document
//     .querySelectorAll("[data-select]")
//     .forEach((s) => s.classList.remove("is-open"));
// });
