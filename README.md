# ZeroDev Wallet Connect Example

This repo demonstrates a wallet powered by ZeroDev that can connect to DApps like OpenSea through WalletConnect.

To run the example:

```
cd ./wallets/react-wallet-v2
yarn install
```

Then create a `.env.local` file with:

```
NEXT_PUBLIC_PROJECT_ID=...
NEXT_PUBLIC_RELAY_URL=wss://relay.walletconnect.com
```

Make sure to set `NEXT_PUBLIC_PROJECT_ID` to your own WalletConnect project ID.

Then set your ZeroDev project ID [here](https://github.com/zerodevapp/zerodev-walletconnect-example/blob/2d5e03b623f356e223070b7b9f739efcaab87f5f/wallets/react-wallet-v2/src/lib/EIP155Lib.ts#L33).  Note that this should be an Ethereum mainnet project.

Then run the wallet locally:

```
yarn run dev
```

Now you should be able to connect this wallet to DApps such as OpenSea.
