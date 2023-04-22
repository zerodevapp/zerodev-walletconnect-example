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

    // if (!process.env.NEXT_ZERODEV_PROJECT_ID) {
    //   throw new Error('NEXT_ZERODEV_PROJECT_ID env var not set')
    // }

    const owner = mnemonic ? Wallet.fromMnemonic(mnemonic) : Wallet.createRandom()
    const signer = await getZeroDevSigner({
      // projectId: process.env.NEXT_ZERODEV_PROJECT_ID,
      projectId: 'c63ec41b-a824-4241-b880-747861294faa',
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
