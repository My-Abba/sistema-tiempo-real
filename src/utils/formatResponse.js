const { Builder } = require('xml2js');

const formatResponse = (req, res, data) => {
  const acceptHeader = req.headers.accept;

  if (acceptHeader === 'application/xml') {
    const builder = new Builder();
    const xml = builder.buildObject(data);
    res.set('Content-Type', 'application/xml');
    return res.send(xml);
  }

  res.json(data);
};

module.exports = formatResponse;
