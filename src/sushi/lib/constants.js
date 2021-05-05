import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  // uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  // uniswapFactoryV2: '0x1b4d6c6B68179Ea8F493d9248acAE12019dE308B',
  // YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  // YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  // UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  // WETH: '0x9e6071CD90EE476e6D3b47e466aCE07ecd58cac7',
  // UNIRouter: '0x80203d6Adc2484d23FFBFF60360F99c6573F9d15',
  // LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  // MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  // SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  // COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  // LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  // SUSHIYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
}

export const contractAddresses = {
  sushi: {
    1: '0x14594c8a9c4d5ab691ceeaddd0213fd05177afb8',
    3: '0x14594c8a9c4d5ab691ceeaddd0213fd05177afb8',
    43113: '0x31B3CC52e7A3AAD2DaB91dC090D67818c6f7f30F',
    43114: '0xef4988cbe89316fa12650DcC036bE2B242895306'
  },
  masterChef: {
    1: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd',
    3: '0xc267dda19Ae1518c097611f393379319D6222bd1',
    43113: '0x82035bC757D8414852770A28E42b70e520816233',
    43114: '0xB5aa594A2DdcBA8AF3EfaFa559C6d73085E80Cd1'
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    3: '0x2a7324828E189Fb01e63f2fcF43F82370eE8487a',
    43113: '0x1D308089a2D1Ced3f1Ce36B1FcaF815b07217be3',
    43114: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7'
  },
  xSushi: {
    1: '0x0944525a92e9DFBD4b58748A71d39Cb406759197',
    3: '0x0944525a92e9DFBD4b58748A71d39Cb406759197',
    43113: '0x1614242b880A4f7d40ca05CCD1341841aF699C8c',
    43114: '0xD8C779bD35925fa00ed6c9465964b01686351Aa4'
    
  }
}

/*
SLP Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc
2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11
3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c
4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47
7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
10 AMPL 0xc5be99a02c6857f9eac67bbce58df5572498f40c
11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28
12 SUSHI 0xce84867c3c02b05dc570d0135103d3fb9cc19433
*/

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      43114: '0xD8C779bD35925fa00ed6c9465964b01686351Aa4',
    },
    tokenAddresses: {
      43114: '0xD8C779bD35925fa00ed6c9465964b01686351Aa4',
    },
    name: 'Double Dipper',
    symbol: 'sBAMBOO',
    tokenSymbol: 'sBAMBOO',
    multiplier: '11.25x',
    icon: '📡',
  },
    {
      pid: 30,
      lpAddresses: {
        43114: '0x271d62B3CD770F02E08f5Fc83Dbf9B551ee212CA',
      },
      tokenAddresses: {
        43114: '0x271d62B3CD770F02E08f5Fc83Dbf9B551ee212CA',
      },
      name: 'Waxy Bamboo',
      symbol: 'BAMBOO-AVAX PGL',
      tokenSymbol: 'PGL',
      icon: '🌔',
    },
  {
    pid: 1,
    lpAddresses: {
      43114: '0xB835f15Ed39a5C0e8e1a83dF52C4eCD7cacd198e',
    },
    tokenAddresses: {
      43114: '0xef4988cbe89316fa12650DcC036bE2B242895306',
    },
    name: '1UP+ for DEFI',
    symbol: 'BAMBOO-AVAX PLP',
    tokenSymbol: 'BAMBOO',
    icon: '❤️',
    },



  // High pairs
    {
    pid: 2,
    lpAddresses: {
      43114: '0xa6b8eE28b640276fC5878dCCd6EdeAe80E53aC10',
    },
    tokenAddresses: {
      43114: '0xef4988cbe89316fa12650DcC036bE2B242895306',
    },
    name: 'ETH plz...',
    symbol: 'BAMBOO-ETH PLP',
    tokenSymbol: 'BAMBOO',
    icon: '🧙🏻',
    },
    {
    pid: 3,
    lpAddresses: {
      43114: '0xC66670dC7A9Ac15D6BF36cB08e2Aff41e4b8657e',
    },
    tokenAddresses: {
      43114: '0xef4988cbe89316fa12650DcC036bE2B242895306',
    },
    name: 'Bit-HODL',
    symbol: 'BAMBOO-WBTC PLP',
    tokenSymbol: 'BAMBOO',
    icon: '💹',
    },
    {
    pid: 4,
    lpAddresses: {
      43114: '0x48DA739bBC1a4cF86c61C877aAbbf6deBb9Bb9d0',
    },
    tokenAddresses: {
      43114: '0xef4988cbe89316fa12650DcC036bE2B242895306',
    },
    name: 'Stinky Link',
    symbol: 'BAMBOO-LINK PLP',
    tokenSymbol: 'BAMBOO',
    icon: '🖇',
    },
    {
    pid: 5,
    lpAddresses: {
      43114: '0xf54A5aE42C007a741aAdcf1e9e79cD5F4A15acac',
    },
    tokenAddresses: {
      43114: '0xef4988cbe89316fa12650DcC036bE2B242895306',
    },
    name: 'Sushi Party!',
    symbol: 'BAMBOO-SUSHI PLP',
    tokenSymbol: 'BAMBOO',
    icon: '🍣',
    },
    {
    pid: 6,
    lpAddresses: {
      43114: '0x3B0f402Dc60B478638D4e6F199D99CE1f7957c96',
    },
    tokenAddresses: {
      43114: '0xef4988cbe89316fa12650DcC036bE2B242895306',
    },
    name: 'Com-UNI-sm',
    symbol: 'BAMBOO-UNI PLP',
    tokenSymbol: 'BAMBOO',
    icon: '🏮',
    },
    {
    pid: 7,
    lpAddresses: {
      43114: '0xF59a1Efa7228c2b2800fF629514dE01285a65108',
    },
    tokenAddresses: {
      43114: '0xef4988cbe89316fa12650DcC036bE2B242895306',
    },
    name: 'DeFi Bank',
    symbol: 'BAMBOO-AAVE PLP',
    tokenSymbol: 'BAMBOO',
    icon: '💳',
    },
    {
      pid: 8,
      lpAddresses: {
        43114: '0x2c2D64F7DB5642dC7Cd79FC3b10ca28353dd4091',
      },
      tokenAddresses: {
        43114: '0xef4988cbe89316fa12650DcC036bE2B242895306',
      },
      name: 'Sad Pangolins',
      symbol: 'BAMBOO-PNG PLP',
      tokenSymbol: 'BAMBOO',
      icon: '😥',
    },
    {
      pid: 9,
      lpAddresses: {
        43114: '0x74a31D2951A9Ab8C48D43c27A25B99a02407D7A2',
      },
      tokenAddresses: {
        43114: '0xef4988cbe89316fa12650DcC036bE2B242895306',
      },
      name: 'Snowman',
      symbol: 'BAMBOO-SNOB PLP',
      tokenSymbol: 'BAMBOO',
      icon: '☃️',
    },
    {
      pid: 10,
      lpAddresses: {
        43114: '0x196C151528121EB0F7494F5E5F820b73fFbAA3f1',
      },
      tokenAddresses: {
        43114: '0xef4988cbe89316fa12650DcC036bE2B242895306',
      },
      name: 'Laundry Basket',
      symbol: 'BAMBOO-USDT PLP',
      tokenSymbol: 'BAMBOO',
      icon: '🧺',
    },
    {
      pid: 11,
      lpAddresses: {
        43114: '0xA81710A9447E7b7F896Aa04E99eF63eE6230009b',
      },
      tokenAddresses: {
        43114: '0xef4988cbe89316fa12650DcC036bE2B242895306',
      },
      name: 'DeFi Dollar',
      symbol: 'BAMBOO-DAI PLP',
      tokenSymbol: 'BAMBOO',
      icon: '💰',
    },
    {
      pid: 12,
      lpAddresses: {
        43114: '0xf5ECf6E0c1DB7561305d59dA9C24cD17dE52AAbf',
      },
      tokenAddresses: {
        43114: '0xef4988cbe89316fa12650DcC036bE2B242895306',
      },
      name: 'YFI Vault',
      symbol: 'BAMBOO-YFI PLP',
      tokenSymbol: 'BAMBOO',
      icon: '🔐',
    },
    {
      pid: 13,
      lpAddresses: {
        43114: '0xB3eC35716877C27Fe677fC2F8B2bDF9C0a72bf61',
      },
      tokenAddresses: {
        43114: '0xf20d962a6c8f70c731bd838a3a388d7d48fa6e15',
      },
      name: 'Liquidity Giant',
      symbol: 'ETH-BTC PLP',
      tokenSymbol: 'ETH',
      icon: '🗿',
    },
    {
      pid: 14,
      lpAddresses: {
        43114: '0x083E14c8C0E122E374E4c6fF2169D8DB7e6728BE',
      },
      tokenAddresses: {
        43114: '0xf20d962a6c8f70c731bd838a3a388d7d48fa6e15',
      },
      name: 'DeFi Ape!',
      symbol: 'AVAX-ETH PLP',
      tokenSymbol: 'AVAX',
      icon: '🦍',
    },
    {
      pid: 15,
      lpAddresses: {
        43114: '0xe98D0f9ede480b7F027B9406c9F24eaa194aD717',
      },
      tokenAddresses: {
        43114: '0x408D4cD0ADb7ceBd1F1A1C33A0Ba2098E1295bAB',
      },
      name: 'Space Walkers',
      symbol: 'AVAX-BTC PLP',
      tokenSymbol: 'AVAX',
      icon: '👨‍🚀',
    },
    {
      pid: 16,
      lpAddresses: {
        43114: '0xBc31baFfcc81f7fD8Cc1715fbB8a5f51c862AbcC',
      },
      tokenAddresses: {
        43114: '0x39cf1BD5f15fb22eC3D9Ff86b0727aFc203427cc',
      },
      name: 'Sushi Chef',
      symbol: 'AVAX-SUSHI PLP',
      tokenSymbol: 'AVAX',
      icon: '🔪',
    },
    {
    pid: 29,
    lpAddresses: {
      43114: '0x0D02b8FfA33A8F77eaFFEeFcDaD1485427494820',
    },
    tokenAddresses: {
      43114: '0xB3fe5374F67D7a22886A0eE082b2E2f9d2651651',
      },
      name: 'Stinky Link',
      symbol: 'AVAX-LINK',
      tokenSymbol: 'AVAX',
      icon: '🖇',
    },
    {
      pid: 17,
      lpAddresses: {
        43114: '0xd8c9eD5257b84cA0b93b321967fbdAb400BC8162',
      },
      tokenAddresses: {
        43114: '0xf39f9671906d8630812f9d9863bBEf5D523c84Ab',
      },
      name: 'DEX Maker',
      symbol: 'AVAX-UNI PLP',
      tokenSymbol: 'AVAX',
      icon: '👷‍♂️',
    },
    {
      pid: 18,
      lpAddresses: {
        43114: '0xa3D9daDb140E2328E36d9122ef3F8085cFa3D2C2',
      },
      tokenAddresses: {
        43114: '0xde3A24028580884448a5397872046a019649b084',
      },
      name: 'AVAX to USDT',
      symbol: 'AVAX-USDT PLP',
      tokenSymbol: 'AVAX',
      icon: '💱',
    },
    {
      pid: 19,
      lpAddresses: {
        43114: '0x6955d4F07233EfAd555CEf8B388704CA6Cab9F35',
      },
      tokenAddresses: {
        43114: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
      },
      name: 'AVAX to DAI',
      symbol: 'AVAX-DAI PLP',
      tokenSymbol: 'AVAX',
      icon: '💱',
    },
    {
      pid: 20,
      lpAddresses: {
        43114: '0x2545b379dcBb673E36c612CFdB8D6f1d61480bCA',
      },
      tokenAddresses: {
        43114: '0xde3a24028580884448a5397872046a019649b084',
      },
      name: 'BTC to USDT',
      symbol: 'BTC-USDT PLP',
      tokenSymbol: 'BTC',
      icon: '💱',
    },
    {
      pid: 21,
      lpAddresses: {
        43114: '0x11F793f10B4c50c20a7efaf82ea6d8d0aA6beb5e',
      },
      tokenAddresses: {
        43114: '0xba7deebbfc5fa1100fb055a87773e1e99cd3507a',
      },
      name: 'BTC to DAI',
      symbol: 'BTC-DAI PLP',
      tokenSymbol: 'BTC',
      icon: '💱',
    },
    {
    pid: 22,
    lpAddresses: {
      43114: '0x958C18ba560680AF38d70D7883Ee9e2976Dc14F2',
    },
    tokenAddresses: {
      43114: '0xf20d962a6c8f70c731bd838a3a388d7d48fa6e15',
    },
    name: 'ETH to USDT',
    symbol: 'ETH-USDT PLP',
    tokenSymbol: 'ETH',
    icon: '💱',
    },
    {
    pid: 23,
    lpAddresses: {
      43114: '0xF3a5962f208BCcf0b64472033220C89F8f984384',
    },
    tokenAddresses: {
      43114: '0xf20d962a6c8f70c731bd838a3a388d7d48fa6e15',
    },
    name: 'ETH to DAI',
    symbol: 'ETH-DAI PLP',
    tokenSymbol: 'ETH',
    icon: '💱',
    },
    {
    pid: 24,
    lpAddresses: {
      43114: '0x917546780c6042D111E9B025ADD88D49b4dfef0f',
    },
    tokenAddresses: {
      43114: '0xba7deebbfc5fa1100fb055a87773e1e99cd3507a',
    },
    name: 'Stablecoin Pool',
    symbol: 'DAI-USDT PLP',
    tokenSymbol: 'DAI',
    icon: '💲',
    },
    {
    pid: 25,
    lpAddresses: {
      43114: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
    },
    tokenAddresses: {
      43114: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
    },
    name: 'Single Asset Pool',
    symbol: 'wAVAX',
    tokenSymbol: 'wAVAX',
    icon: '❄',
    },
    {
    pid: 26,
    lpAddresses: {
      43114: '0x408d4cd0adb7cebd1f1a1c33a0ba2098e1295bab',
    },
    tokenAddresses: {
      43114: '0x408d4cd0adb7cebd1f1a1c33a0ba2098e1295bab',
    },
    name: 'Single Asset Pool',
    symbol: 'BTC',
    tokenSymbol: 'BTC',
    icon: '💸',
    },
    {
    pid: 27,
    lpAddresses: {
      43114: '0xf20d962a6c8f70c731bd838a3a388d7d48fa6e15',
    },
    tokenAddresses: {
      43114: '0xf20d962a6c8f70c731bd838a3a388d7d48fa6e15',
    },
    name: 'Single Asset Pool',
    symbol: 'ETH',
    tokenSymbol: 'ETH',
    icon: '💎',
    },
    {
    pid: 28,
    lpAddresses: {
      43114: '0xb3fe5374f67d7a22886a0ee082b2e2f9d2651651',
    },
    tokenAddresses: {
      43114: '0xb3fe5374f67d7a22886a0ee082b2e2f9d2651651',
    },
    name: 'Single Asset Pool',
    symbol: 'LINK',
    tokenSymbol: 'LINK',
    icon: '📡',
    },
//     {
//     pid: 9,
//     lpAddresses: {
//       43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
//     },
//     tokenAddresses: {
//       43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
//     },
//     name: 'DeFi Dollar',
//     symbol: 'BAMBOO-DAI PLP',
//     tokenSymbol: 'BAMBOO',
//     icon: '💰',
//     },
//     {
//     pid: 10,
//     lpAddresses: {
//       43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
//     },
//     tokenAddresses: {
//       43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
//     },
//     name: 'Laundry Basket',
//     symbol: 'BAMBOO-USDT PLP',
//     tokenSymbol: 'BAMBOO',
//     icon: '🧺',
//     },
//     {
//     pid: 11,
//     lpAddresses: {
//       43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
//     },
//     tokenAddresses: {
//       43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
//     },
//     name: 'YFI Vault',
//     symbol: 'BAMBOO-YFI PLP',
//     tokenSymbol: 'BAMBOO',
//     icon: '🔐',
//     },
//     {
//     pid: 12,
//     lpAddresses: {
//       43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
//     },
//     tokenAddresses: {
//       43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
//     },
//     name: 'Snowman',
//     symbol: 'BAMBOO-SNOB PLP',
//     tokenSymbol: 'BAMBOO',
//     icon: '☃️',
//     },








    
// // medium pairs
//     {
//     pid: 13,
//     lpAddresses: {
//         43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
//     },
//     tokenAddresses: {
//         43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
//     },
//     name: 'Liquidity Giant',
//     symbol: 'WBTC-ETH PLP',
//     tokenSymbol: 'WBTC',
//     icon: '🗿',
//     },
//     {
//     pid: 14,
//     lpAddresses: {
//         43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
//     },
//     tokenAddresses: {
//         43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
//     },
//     name: 'DeFi Ape!',
//     symbol: 'AVAX-ETH PLP',
//     tokenSymbol: 'AVAX',
//     icon: '🦍',
//     },
//     {
//     pid: 15,
//     lpAddresses: {
//         43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
//     },
//     tokenAddresses: {
//         43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
//     },
//     name: 'Space Walkers',
//     symbol: 'AVAX-WBTC PLP',
//     tokenSymbol: 'AVAX',
//     icon: '👨‍🚀',
//     },
//     {
//     pid: 16,
//     lpAddresses: {
//     43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
//     },
//     tokenAddresses: {
//     43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
//     },
//     name: 'Sushi Chef',
//     symbol: 'AVAX-SUSHI PLP',
//     tokenSymbol: 'AVAX',
//     icon: '🔪',
//     },
//     {
//     pid: 17,
//     lpAddresses: {
//     43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
//     },
//     tokenAddresses: {
//     43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
//     },
//     name: 'Oracle Breakdown',
//     symbol: 'AVAX-LINK PLP',
//     tokenSymbol: 'AVAX',
//     icon: '🖇',
//     },
//     {
//     pid: 18,
//     lpAddresses: {
//     43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
//     },
//     tokenAddresses: {
//     43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
//     },
//     name: 'DEX Maker',
//     symbol: 'AVAX-UNI PLP',
//     tokenSymbol: 'AVAX',
//     icon: '👷‍♂️',
//     },
    








    
//     //  Low Pairs
//     {
//     pid: 19,
//     lpAddresses: {
//     43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
//     },
//     tokenAddresses: {
//     43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
//     },
//     name: 'AVAX to USDT',
//     symbol: 'AVAX-USDT PLP',
//     tokenSymbol: 'AVAX',
//     icon: '💱',
//     },
//     {
//     pid: 20,
//     lpAddresses: {
//     43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
//     },
//     tokenAddresses: {
//     43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
//     },
//     name: 'WBTC to USDT',
//     symbol: 'WBTC/USDT PLP',
//     tokenSymbol: 'WBTC',
//     icon: '💱',
//     },
//     {
//     pid: 21,
//     lpAddresses: {
//     43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
//     },
//     tokenAddresses: {
//     43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
//     },
//     name: 'ETH to USDT',
//     symbol: 'ETH-USDT PLP',
//     tokenSymbol: 'ETH',
//     icon: '💱',
//     },
//     {
//     pid: 22,
//     lpAddresses: {
//     43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
//     },
//     tokenAddresses: {
//     43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
//     },
//     name: 'AVAX to DAI',
//     symbol: 'AVAX-USDT PLP',
//     tokenSymbol: 'AVAX',
//     icon: '💱',
//     },
//     {
//     pid: 23,
//     lpAddresses: {
//     43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
//     },
//     tokenAddresses: {
//     43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
//     },
//     name: 'WBTC to DAI',
//     symbol: 'BTC-USDT PLP',
//     tokenSymbol: 'WBTC',
//     icon: '💱',
//     },
//     {
//     pid: 24,
//     lpAddresses: {
//     43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
//     },
//     tokenAddresses: {
//     43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
//     },
//     name: 'ETH to DAI',
//     symbol: 'ETH-DAI PLP',
//     tokenSymbol: 'ETH',
//     icon: '💱',
//     },










// // SINGLE ASSET POOLS
//     {
//     pid: 25,
//     lpAddresses: {
//     43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
//     },
//     tokenAddresses: {
//     43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
//     },
//     name: 'Stablecoin Pool',
//     symbol: 'DAI-USDT PLP',
//     tokenSymbol: 'DAI',
//     icon: '💲',
//     },
//     {
//     pid: 26,
//     lpAddresses: {
//     43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
//     },
//     tokenAddresses: {
//     43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
//     },
//     name: 'Single Asset Pool',
//     symbol: 'AVAX',
//     tokenSymbol: 'AVAX',
//     icon: '❄',
//     },
//     {
//     pid: 27,
//     lpAddresses: {
//     43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
//     },
//     tokenAddresses: {
//     43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
//     },
//     name: 'Single Asset Pool',
//     symbol: 'WBTC',
//     tokenSymbol: 'WBTC',
//     icon: '💸',
//     },
//     {
//     pid: 28,
//     lpAddresses: {
//     43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
//     },
//     tokenAddresses: {
//     43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
//     },
//     name: 'Single Asset Pool',
//     symbol: 'ETH',
//     tokenSymbol: 'ETH',
//     icon: '💎',
//     },
//     {
//     pid: 28,
//     lpAddresses: {
//     43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
//     },
//     tokenAddresses: {
//     43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
//     },
//     name: 'Single Asset Pool',
//     symbol: 'LINK',
//     tokenSymbol: 'LINK',
//     icon: '📡',
//     },
]
