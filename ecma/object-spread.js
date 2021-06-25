
const getSettings = (settings = {}) => {
  const defaults = {
    host: '0.0.0.0'
  };

  const result = {
    ...defaults,
    ...settings
  };

  // almost the same as
  result.host = settings.host || defaults.host;

  result.host = 'another host';

  // print resulting settings - by mixing them
  // with defaults
  console.log('result', result);
  console.log(settings);
  console.log(defaults);
}

const settings = {
  port: 9090,
  user: 'root'
};

getSettings(settings)