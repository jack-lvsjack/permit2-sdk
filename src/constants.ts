import { BigNumber } from '@ethersproject/bignumber'

const PERMIT2_CONFIGS:{[key: number]: string} = {
  // zKatana
  [1261120]: '0x629B419d4601Bfa96E954C1B127fEC5efC3DCC20',
  // astar zkEVM
  [3776]:'0x000000000022D473030F116dDEE9F6B43aC78BA3'
}

// export const PERMIT2_ADDRESS = '0x000000000022D473030F116dDEE9F6B43aC78BA3'
export const PERMIT2_ADDRESS = (chainId: number): string => {
  if (!(chainId in PERMIT2_CONFIGS)) throw new Error(`PERMIT2 not deployed on chain ${chainId}`)
  return PERMIT2_CONFIGS[chainId]
}

export const MaxUint48 = BigNumber.from('0xffffffffffff')
export const MaxUint160 = BigNumber.from('0xffffffffffffffffffffffffffffffffffffffff')
export const MaxUint256 = BigNumber.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

// alias max types for their usages
// allowance transfer types
export const MaxAllowanceTransferAmount = MaxUint160
export const MaxAllowanceExpiration = MaxUint48
export const MaxOrderedNonce = MaxUint48

// signature transfer types
export const MaxSignatureTransferAmount = MaxUint256
export const MaxUnorderedNonce = MaxUint256
export const MaxSigDeadline = MaxUint256

export const InstantExpiration: BigNumber = BigNumber.from(0)
