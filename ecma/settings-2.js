
const getSettings = ({ host = 'localhost', port }, doLogin) => {
  console.log(host, port);
};

getSettings({
  port: 8080
}, true);
