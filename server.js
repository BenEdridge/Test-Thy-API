const app = require('./app');
const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});

module.exports = {
  server
};