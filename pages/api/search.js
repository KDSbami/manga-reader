const testData = [
  {
    cover:
      "https://uploads.mangadex.org/covers/32d76d19-8a05-4db0-9fc2-e0b0648fe9d0/f5873770-80a4-470e-a11c-63b709d87eb3.jpg",
    name: "Solo Leveling",
  },
  {
    cover:
      "https://uploads.mangadex.org/covers/8f3e1818-a015-491d-bd81-3addc4d7d56a/4113e972-d228-4172-a885-cb30baffff97.jpg.256.jpg",
    name: "Solo Leveling",
  },
  {
    cover:
      "https://uploads.mangadex.org/covers/e78a489b-6632-4d61-b00b-5206f5b8b22b/f1cc3f10-d596-4ddb-b1da-9e66458ba566.jpg",
    name: "Solo Leveling",
  },
  {
    cover:
      "https://uploads.mangadex.org/covers/e78a489b-6632-4d61-b00b-5206f5b8b22b/336836e0-3ec4-4cea-8fae-f8f407cb0d77.jpg",
    name: "Solo Leveling",
  },
  {
    cover:
      "https://uploads.mangadex.org/covers/e78a489b-6632-4d61-b00b-5206f5b8b22b/38fa1cc3-463c-4ab5-9df1-654b46f8a762.jpg",
    name: "Solo Leveling",
  },
  {
    cover:
      "https://uploads.mangadex.org/covers/32d76d19-8a05-4db0-9fc2-e0b0648fe9d0/bc70048e-64fc-494a-9543-b4d29662ac41.jpg",
    name: "Solo Leveling",
  },
  {
    cover:
      "https://uploads.mangadex.org/covers/32d76d19-8a05-4db0-9fc2-e0b0648fe9d0/f5873770-80a4-470e-a11c-63b709d87eb3.jpg",
    name: "Solo Leveling",
  },
  {
    cover:
      "https://uploads.mangadex.org/covers/8f3e1818-a015-491d-bd81-3addc4d7d56a/4113e972-d228-4172-a885-cb30baffff97.jpg.256.jpg",
    name: "Solo Leveling",
  },
  {
    cover:
      "https://uploads.mangadex.org/covers/e78a489b-6632-4d61-b00b-5206f5b8b22b/f1cc3f10-d596-4ddb-b1da-9e66458ba566.jpg",
    name: "Solo Leveling",
  },
  {
    cover:
      "https://uploads.mangadex.org/covers/e78a489b-6632-4d61-b00b-5206f5b8b22b/336836e0-3ec4-4cea-8fae-f8f407cb0d77.jpg",
    name: "Solo Leveling",
  },
  {
    cover:
      "https://uploads.mangadex.org/covers/e78a489b-6632-4d61-b00b-5206f5b8b22b/38fa1cc3-463c-4ab5-9df1-654b46f8a762.jpg",
    name: "Solo Leveling",
  },
  {
    cover:
      "https://uploads.mangadex.org/covers/32d76d19-8a05-4db0-9fc2-e0b0648fe9d0/bc70048e-64fc-494a-9543-b4d29662ac41.jpg",
    name: "Solo Leveling",
  },
];

const searchCall = (req, res) => {
  const query = req.query.q;
  // fetchDataWithAuth() here and return to Container? @KDSbami
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ data: testData }));
};

export default searchCall;