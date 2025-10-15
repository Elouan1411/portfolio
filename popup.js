document.addEventListener("DOMContentLoaded", () => {
    const modals = document.querySelectorAll(".modal");
    const openLinks = document.querySelectorAll("[data-modal]");
    const closeButtons = document.querySelectorAll(".close-btn-popup");

    openLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const modalId = link.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";
        });
    });

    closeButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const modal = btn.closest(".modal");
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        });
    });

    modals.forEach((modal) => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });
    });
});
