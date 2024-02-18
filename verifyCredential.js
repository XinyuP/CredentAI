const cred = {
  id: "urn:uuid:5e10e9eb-c6fd-44ad-8d33-2cfa1c0edf0a",
  credentialSubject: {
    course: "Blockchain 101",
    passed: true,
    id: "did:polygon:0x6C3b3225759Cbda68F96378A9F0277B4374f9F06",
  },
  expirationDate: "2034-02-02",
  nft: {
    tokenId: "1",
    chain: "polygon",
    contractAddress: "0x6D67D9188d9a9bECB915028342b2E6FC7d1A5EcD",
  },
  issuer: { id: "did:polygon:0xFfb71052e22277a8b4ED6F4B388e819689784D49" },
  type: [
    "VerifiableCredential",
    "urn:uuid:8073b412-d1c9-412d-a6c0-db6f65c6dd59",
  ],
  issuanceDate: "2024-02-18T05:32:19.038Z",
  "@context": ["https://www.w3.org/2018/credentials/v1"],
  proof: {
    verificationMethod:
      "did:polygon:0xFfb71052e22277a8b4ED6F4B388e819689784D49#ethereumAddress",
    ethereumAddress: null,
    created: "2024-02-18T05:33:02.949Z",
    proofPurpose: "assertionMethod",
    type: "EthereumEip712Signature2021",
    proofValue:
      "0x2b8ea2ea45575ff9580f3fb9492569c76e88e44cc2268192943a8340f7d15102583ed38067ab7daf5e1f537c0dc89342c667dd26c6634ff5bdbce5b5fdc5ee6b1b",
    eip712: {
      domain: {
        name: "Crossmint",
        version: "0.1",
        chainId: 4,
        verifyingContract: "0xD8393a735e8b7B6E199db9A537cf27C61Aa74954",
      },
      types: {
        VerifiableCredential: [
          { name: "@context", type: "string[]" },
          { name: "type", type: "string[]" },
          { name: "id", type: "string" },
          { name: "issuer", type: "Issuer" },
          { name: "credentialSubject", type: "CredentialSubject" },
          { name: "issuanceDate", type: "string" },
          { name: "expirationDate", type: "string" },
          { name: "nft", type: "Nft" },
        ],
        CredentialSubject: [
          { name: "id", type: "string" },
          { name: "course", type: "string" },
          { name: "passed", type: "bool" },
        ],
        Issuer: [{ name: "id", type: "string" }],
        Nft: [
          { name: "tokenId", type: "string" },
          { name: "contractAddress", type: "string" },
          { name: "chain", type: "string" },
        ],
      },
      primaryType: "VerifiableCredential",
    },
  },
};

const options = {
  method: "POST",
  headers: {
    "X-API-KEY":
      "sk_staging_5qDin5MvLDXeo7pDSJKPBt9M35NzwvUf5T26BEVqFdiigrU1K95C4rKfrzXyFacgumb4nXkqPL4nM5WY2GcMoYLpRAzMycDvbRKMrFqiynV6ekQVkwyeeET7em866PA6c2FguM5ygDd9L8viYgwRXxVP5mBCt6dg6qfpSTLcT5CchupuW6gXVBwsHk9S1bSQ8NPV7CXxMviyotJXPuYWsxpK",
    "Content-Type": "application/json",
  },
  body: `{"credential":${JSON.stringify(cred)}}`,
};

// NOTE: you need to replace the {} above with the JSON of a retrieved credential

fetch("https://staging.crossmint.com/api/unstable/credentials/verify", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
