const collectionId = "5b509a50-9cf8-48be-be4a-5d2a53a8551f";
const nftId = "urn:uuid:5e10e9eb-c6fd-44ad-8d33-2cfa1c0edf0a";
const options = {
  method: "DELETE",
  headers: {
    "X-API-KEY":
      "sk_staging_5qDin5MvLDXeo7pDSJKPBt9M35NzwvUf5T26BEVqFdiigrU1K95C4rKfrzXyFacgumb4nXkqPL4nM5WY2GcMoYLpRAzMycDvbRKMrFqiynV6ekQVkwyeeET7em866PA6c2FguM5ygDd9L8viYgwRXxVP5mBCt6dg6qfpSTLcT5CchupuW6gXVBwsHk9S1bSQ8NPV7CXxMviyotJXPuYWsxpK",
  },
};

fetch(
  `https://staging.crossmint.com/api/2022-06-09/collections/${collectionId}/nfts/${nftId}`,
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
