import { web3 } from '@project-serum/anchor'
import { deserializePublicKey } from './common'
import BN from 'bn.js'

export class TicketAccount {
  stateAddress!: web3.PublicKey
  beneficiary!: web3.PublicKey
  lamportsAmount!: BN
  createdEpoch!: BN

  constructor(args: TicketAccount) {
    Object.assign(this, args)
  }
}

export const ticketAccountBorshSchema = [
  [TicketAccount, {
    kind: 'struct',
    fields: [
      ['stateAddress', deserializePublicKey],
      ['beneficiary', deserializePublicKey],
      ['lamportsAmount', 'u64'],
      ['createdEpoch', 'u64'],
    ],
  }],
] as const
