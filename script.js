


        // Show project card when button is clicked
        const buttons = document.querySelectorAll('button[data-target]');
        const cards = document.querySelectorAll('.project-card');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.getAttribute('data-target');

                cards.forEach(card => {
                    if(card.id === targetId) {
                        card.classList.add('active');
                    } else {
                        card.classList.remove('active');
                    }
                });
            });
        });

document.querySelectorAll(".skill").forEach(skill => {
    const level = skill.getAttribute("data-level");
    skill.style.setProperty("--level", level + "%");
});

