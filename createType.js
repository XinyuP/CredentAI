const options = {
  method: "POST",
  headers: {
    "X-API-KEY":
      "sk_staging_5qDin5MvLDXeo7pDSJKPBt9M35NzwvUf5T26BEVqFdiigrU1K95C4rKfrzXyFacgumb4nXkqPL4nM5WY2GcMoYLpRAzMycDvbRKMrFqiynV6ekQVkwyeeET7em866PA6c2FguM5ygDd9L8viYgwRXxVP5mBCt6dg6qfpSTLcT5CchupuW6gXVBwsHk9S1bSQ8NPV7CXxMviyotJXPuYWsxpK",
    "Content-Type": "application/json",
  },
  body: '{"credentialSubjectSchema":[{"name":"securityLevel","type":"uint64"},{"name":"name","type":"string"}]}',
};

fetch("https://staging.crossmint.com/api/unstable/credentials/types", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
