import { providers, Wallet } from 'ethers'
import { getZeroDevSigner, ZeroDevSigner } from '@zerodevapp/sdk'

/**
 * Types
 */
interface IInitArgs {
  mnemonic?: string
}

/**
 * Library
 */
export default class EIP155Lib {
  owner: Wallet
  wallet: ZeroDevSigner

  constructor(owner: Wallet, wallet: ZeroDevSigner) {
    this.owner = owner
    this.wallet = wallet
  }

  static async init({ mnemonic }: IInitArgs) {
    console.log(process.env)

    if (!process.env.NEXT_PUBLIC_ZERODEV_PROJECT_ID) {
      throw new Error('NEXT_PUBLIC_ZERODEV_PROJECT_ID env var not set')
    }

    const owner = mnemonic ? Wallet.fromMnemonic(mnemonic) : Wallet.createRandom()

    // This is a SCW wallet which is deployed
    // const owner = new Wallet('468f0c80d5336c4a45be71fa19b77e9320dc0abaea4fd018e0c49aca90c1db78')

    const signer = await getZeroDevSigner({
      projectId: process.env.NEXT_PUBLIC_ZERODEV_PROJECT_ID,
      owner: owner,
    })

    return new EIP155Lib(owner, signer)
  }

  getMnemonic() {
    return this.owner.mnemonic.phrase
  }

  getAddress() {
    return this.wallet.getAddress()
  }

  signMessage(message: string) {
    console.log('signMessage', message)
    return this.wallet.signMessage(message)
  }

  _signTypedData(domain: any, types: any, data: any) {
    return this.wallet._signTypedData(domain, types, data)
  }

  connect(provider: providers.JsonRpcProvider) {
    return this.wallet.connect(provider)
  }

  signTransaction(transaction: providers.TransactionRequest) {
    return this.wallet.signTransaction(transaction)
  }
}
