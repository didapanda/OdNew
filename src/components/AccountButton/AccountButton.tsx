import React, { useCallback } from 'react'
import { useWallet } from 'use-wallet'
import useModal from '../../hooks/useModal'
import Button from '@material-ui/core/Button';
import WalletProviderModal from '../WalletProviderModal'
import AccountModal from './components/AccountModal'

import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';

interface AccountButtonProps {}

const AccountButton: React.FC<AccountButtonProps> = (props) => {
  const [onPresentAccountModal] = useModal(<AccountModal />)
  const [onPresentWalletProviderModal] = useModal(
    <WalletProviderModal />,
    'provider',
  )

  const { account } = useWallet()

  const handleUnlockClick = useCallback(() => {
    onPresentWalletProviderModal()
  }, [onPresentWalletProviderModal])

  const classes = useStyles();
  return (
    <div>
      {!account ? (
        <Button className={classes.connect} variant="outlined" onClick={handleUnlockClick}>Unlock Wallet</Button>
      ) : (
        <Button className={classes.connect} variant="outlined" onClick={onPresentAccountModal}>My Wallet</Button>
      )}
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    connect: {
      borderRadius: '20px !important',
    },
  }),
);

export default AccountButton
