import { useCallback } from 'react'

import useSushi from './useSushi'
import { useWallet } from 'use-wallet'

import { harvest, getMasterShifuContract } from '../sushi/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const sushi = useSushi()
  const masterChefContract = getMasterShifuContract(sushi)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, sushi])

  return { onReward: handleReward }
}

export default useReward
