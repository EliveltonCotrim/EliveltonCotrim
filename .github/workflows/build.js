const fs = require('fs');
const path = require('path');

const snakeAnimation = `
  // Coloque aqui o código da animação da cobrinha
`;

fs.writeFileSync(path.join(__dirname, 'dist', 'snake.html'), snakeAnimation);
