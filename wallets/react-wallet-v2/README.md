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
NEXT_PUBLIC_ZERODEV_PROJECT_ID=...
```

Make sure to set `NEXT_PUBLIC_PROJECT_ID` to your own WalletConnect project ID and `NEXT_PUBLIC_ZERODEV_PROJECT_ID` to your ZeroDev Ethereum mainnet project ID.

Then run the wallet locally:

```
yarn run dev
```

Now you should be able to connect this wallet to DApps such as OpenSea.


Note: This will only work with deployed wallets, i.e. having sent one transaction.