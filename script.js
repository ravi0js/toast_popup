// Selecting elements for later use
const showToastBtn = document.querySelector(".show-toast");
const horizontalPosition = document.querySelector("#horizontal-position");
const verticalPosition = document.querySelector("#vertical-position");
const toastType = document.querySelector("#toast-type");
const toastMessage = document.querySelector("#toast-message");
const toastsContainer = document.querySelector(".toasts-container");
const durationInput = document.querySelector("#duration");

showToastBtn.addEventListener("click", () => {
  // Set the position based on the dropdown values
  toastsContainer.classList.toggle(
    "right",
    horizontalPosition.value === "right"
  );
  toastsContainer.classList.toggle(
    "bottom",
    verticalPosition.value === "bottom"
  );

  // Create new toast
  const newToast = document.createElement("div");
  newToast.classList.add("toast", toastType.value); // Added toast type in one line

  newToast.textContent = ` ${toastMessage.value}`; // Direct text content setting

  const closeIcon = document.createElement("span");
  closeIcon.textContent = " ✕"; // Used textContent for better performance
  newToast.append(closeIcon);

  // Function to remove the toast
  const removeToast = () => {
    newToast.classList.add(
      toastsContainer.classList.contains("right") ? "go-right" : "go-left"
    );
    setTimeout(() => newToast.remove(), 100);
  };

  // Close toast on clicking the close icon
  closeIcon.addEventListener("click", removeToast);

  // Automatically remove the toast after the specified duration
  setTimeout(removeToast, parseInt(durationInput.value) * 1000);

  // Append the toast to the container
  toastsContainer.append(newToast);
});
