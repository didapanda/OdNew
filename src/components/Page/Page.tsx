import React, { useEffect, useState} from 'react'
import styled from 'styled-components'

import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';

const Page: React.FC = ({ children }) => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  let isMobile: boolean = (width <= 768);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  index: number,
  ) => {
  setSelectedIndex(index);
  };

  const classes = useStyles()

  useEffect(() => {
  window.addEventListener('resize', handleWindowSizeChange);
  return () => {
    window.removeEventListener('resize', handleWindowSizeChange);
    // setOpen(isMobile);
  }
  }, []);

  useEffect(() => () => isMobile, [isMobile])

  return (
    <div className={!isMobile ? classes.page : classes.pageMini}>{children}</div>
    )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    page: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      width: 'calc(100vw - 350px);',
    },
    pageMini: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      width: 'calc(100vw - 80px);',
      marginLeft: '30px',
      paddingRight: '20px',
    },
  }))

export default Page
