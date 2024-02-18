// const names = ["max", "joe", "ben"];
let nameToLevelMap = new Map([
  ["Alice", 1],
  ["Bob", 2],
  ["Charlie", 3],
  ["Mike", 4],
  ["Blaire", 5],
]);

for (let [name, level] of nameToLevelMap) {
  const collectionId = "6a059932-8cd4-43fb-b6e5-3945af0ef98e";
  const options = {
    method: "POST",
    headers: {
      "X-API-KEY":
        "sk_staging_5qDin5MvLDXeo7pDSJKPBt9M35NzwvUf5T26BEVqFdiigrU1K95C4rKfrzXyFacgumb4nXkqPL4nM5WY2GcMoYLpRAzMycDvbRKMrFqiynV6ekQVkwyeeET7em866PA6c2FguM5ygDd9L8viYgwRXxVP5mBCt6dg6qfpSTLcT5CchupuW6gXVBwsHk9S1bSQ8NPV7CXxMviyotJXPuYWsxpK",
      "Content-Type": "application/json",
    },
    body: `{"metadata":{"name":"Employee Info Access Level","image":"ipfs://QmUGeWerAfyKVVdAjaxYdAhK74oJmBvusPdKtNDN3e1bYN","description":"passed the course"},"recipient":"polygon:0x6C3b3225759Cbda68F96378A9F0277B4374f9F06","credential":{"subject":{"securityLevel":${level},"name":"${name}"},"expiresAt":"2034-02-02"}}`,
  };

  fetch(
    `https://staging.crossmint.com/api/unstable/collections/${collectionId}/credentials`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
