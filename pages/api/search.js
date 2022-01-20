const searchCall = (req, res) => {
  const query = req.query.q;
  // fetchDataWithAuth() here and return to Container? @KDSbami
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ apiGot: query }));
};

export default searchCall;