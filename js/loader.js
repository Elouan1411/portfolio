async function loadComponent(elementId, filePath, append = false) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
        }
        const html = await response.text();
        const element = document.getElementById(elementId);
        if (element) {
            if (append) {
                const div = document.createElement("div");
                div.innerHTML = html;
                while (div.firstChild) {
                    element.appendChild(div.firstChild);
                }
            } else {
                element.innerHTML = html;
            }

            const scripts = element.querySelectorAll("script");
            scripts.forEach((oldScript) => {
                const newScript = document.createElement("script");
                Array.from(oldScript.attributes).forEach((attr) => newScript.setAttribute(attr.name, attr.value));
                newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                oldScript.parentNode.replaceChild(newScript, oldScript);
            });
        } else {
            console.warn(`Element with id '${elementId}' not found.`);
        }
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    // Load main sections
    await Promise.all([
        loadComponent("top", "components/header.html"),
        loadComponent("home", "sections/home.html"),
        loadComponent("about", "sections/about.html"),
        loadComponent("portfolio", "sections/portfolio.html"),
        loadComponent("skills", "sections/skills.html"),
        loadComponent("history", "sections/history.html"),
        loadComponent("footer-container", "sections/contact.html"),
    ]);

    // Load modals
    const modalContainer = document.getElementById("modals-container");
    if (modalContainer) {
        const modals = [
            "components/modals/tuneflow.html",
            "components/modals/completion.html",
            "components/modals/nuit-info.html",
            "components/modals/canyon-radar.html",
            "components/modals/centipede.html",
            "components/modals/rnday.html",
        ];

        for (const modalPath of modals) {
            await loadComponent("modals-container", modalPath, true);
        }
    }

    document.dispatchEvent(new Event("contentLoaded"));
});
