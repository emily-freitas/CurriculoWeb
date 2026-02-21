document.addEventListener('DOMContentLoaded', () => {
    // Lista de habilidades atualizada para o perfil Pleno da Beatriz
    const skills = [
        'React.js', 
        'Node.js', 
        'TypeScript', 
        'MongoDB', 
        'Docker', 
        'AWS (S3/EC2)', 
        'Git & GitHub', 
        'Metodologias Ágeis (Scrum)',
        'UI/UX Design',
        'Testes Unitários (Jest)'
    ];

    const skillsList = document.getElementById('skills-list');

    // Limpa a lista caso haja algo nela
    skillsList.innerHTML = '';

    // Cria as tags de habilidades dinamicamente
    skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.innerText = skill;
        skillsList.appendChild(span);
    });
});

// --- Lógica do Modo Escuro ---
const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Troca o ícone do botão
        if (body.classList.contains('dark-mode')) {
            themeBtn.innerText = '☀️ Modo Claro';
        } else {
            themeBtn.innerText = '🌙 Modo Escuro';
        }
    });