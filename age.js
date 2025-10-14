document.addEventListener("DOMContentLoaded", () => {
    function calculateAge(birthDate) {
        const birth = new Date(birthDate);
        const today = new Date();
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        console.log(age);
        return age;
    }
    const elements = document.querySelectorAll('span[class="2005-11-14"]');
    elements.forEach((el) => {
        console.log(el);
        el.innerHTML = calculateAge("2005-11-14");
    });
});
