import React, { useCallback, useEffect, useState} from 'react'
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';

import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useSushi from '../../../hooks/useSushi'
import { getSushiAddress } from '../../../sushi/utils'
import { getBalanceNumber } from '../../../utils/formatBalance'
import Button from '../../Button'
import CardIcon from '../../CardIcon'
import Label from '../../Label'
import Modal, { ModalProps } from '../../Modal'
import ModalActions from '../../ModalActions'
import ModalContent from '../../ModalContent'
import ModalTitle from '../../ModalTitle'
import Spacer from '../../Spacer'
import Value from '../../Value'
import bamboo from "../../../assets/img/bamboo.png";
import classes from '*.module.css';

const AccountModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { account, reset } = useWallet()

  const handleSignOutClick = useCallback(() => {
    onDismiss!()
    reset()
  }, [onDismiss, reset])

  const sushi = useSushi()
  const sushiBalance = useTokenBalance(getSushiAddress(sushi))
  const classes = useStyles()

  return (
    <Modal>
      <ModalTitle text="My Account" />
      <ModalContent>
        <Spacer />

        <div style={{ display: 'flex', backgroundColor: 'white !important' }}>
          <div className={classes.balanceWrapper}>
            {<img src={bamboo} height={64} width={64}/>}
            <div className={classes.balance}>
              <Value value={getBalanceNumber(sushiBalance)} />
              <Label text="BAMBOO Balance" />
            </div>
          </div>
        </div>

        <Spacer />
        <Button
          href={`https://etherscan.io/address/${account}`}
          text="View on Etherscan"
          // variant="secondary"
        />
        <Spacer />
        <Button
          onClick={handleSignOutClick}
          text="Sign out"
          // variant="secondary"
        />
      </ModalContent>
      <ModalActions>
        <Button onClick={onDismiss} text="Cancel" />
      </ModalActions>
    </Modal>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    balance: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    balanceWrapper: {
      alignItems: 'center',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white !important',
    },
  }))

export default AccountModal
