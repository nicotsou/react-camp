
const getSettings = (settings) => {
  const defaults = {
    host: '0.0.0.0'
  };

  const result = {
    ...defaults,
    ...settings
  };

  // print resulting settings - by mixing them
  // with defaults
  console.log(result);
}

const settings = {
  port: 9090,
  user: 'root'
};

getSettings(settings)