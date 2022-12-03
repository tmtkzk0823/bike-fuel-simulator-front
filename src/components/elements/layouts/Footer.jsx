import { memo } from 'react'
import { Box } from '@mui/material'

export const Footer = memo(() => {
  return (
    <Box
      sx={{
        backgroundColor: '#d3d3d3',
        color: '#ffffee',
        display: 'flex',
        justifyContent: 'space-evenly',
        bottom: 0,
        pt: 2,
        pb: 2,
        width: '100%',
      }}
    >
      <p>&copy;バイク航続距離シミュレーター</p>
      <p>プライバシーポリシー</p> {/*後にリンク(モーダル表示のイベント)を作成*/}
      <p>利用規約</p> {/*後にリンク(モーダル表示のイベント)を作成*/}
      <p>twitter</p>
      {/*後に
    リンク(開発者twitter)を作成*/}
    </Box>
  )
})
