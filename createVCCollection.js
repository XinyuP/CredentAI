const options = {
  method: "POST",
  headers: {
    "X-API-KEY":
      "sk_staging_5qDin5MvLDXeo7pDSJKPBt9M35NzwvUf5T26BEVqFdiigrU1K95C4rKfrzXyFacgumb4nXkqPL4nM5WY2GcMoYLpRAzMycDvbRKMrFqiynV6ekQVkwyeeET7em866PA6c2FguM5ygDd9L8viYgwRXxVP5mBCt6dg6qfpSTLcT5CchupuW6gXVBwsHk9S1bSQ8NPV7CXxMviyotJXPuYWsxpK",
    "Content-Type": "application/json",
  },
  body: '{"chain":"polygon","credentials":{"type":"urn:uuid:39fd83b5-b0da-4d97-be5a-80c246de6ecb"},"metadata":{"name":"VC Collection Name QS","description":"Test"}}',
};

fetch("https://staging.crossmint.com/api/unstable/collections/", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
