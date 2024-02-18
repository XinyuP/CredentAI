const contractAddress = "0x233c553692E2F688Ffe1baEdF50a5C17607D8224";
const credentialId = "urn:uuid:c9927ab4-8b6f-453a-bf7d-d56cc144e7e7";
const options = {
  method: "GET",
  headers: {
    "X-API-KEY":
      "sk_staging_5qDin5MvLDXeo7pDSJKPBt9M35NzwvUf5T26BEVqFdiigrU1K95C4rKfrzXyFacgumb4nXkqPL4nM5WY2GcMoYLpRAzMycDvbRKMrFqiynV6ekQVkwyeeET7em866PA6c2FguM5ygDd9L8viYgwRXxVP5mBCt6dg6qfpSTLcT5CchupuW6gXVBwsHk9S1bSQ8NPV7CXxMviyotJXPuYWsxpK",
  },
};

fetch(
  `https://staging.crossmint.com/api/unstable/credentials/${credentialId}`,
  options
)
  .then((response) => response.json())
  .then((response) => console.log(JSON.stringify(response)))
  .catch((err) => console.error(err));
