import { Box } from '@mui/material'

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#d3d3d3',
        color: '#ffffee',
        p: 2,
        b: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <p>&copy;バイク航続距離シュミレーター</p>
      <p>プライバシーポリシー</p> {/*後にリンク(モーダル表示のイベント)を作成*/}
      <p>利用規約</p> {/*後にリンク(モーダル表示のイベント)を作成*/}
      <p>twitter</p>{' '}
      {/*後に
    リンク(開発者twitter)を作成*/}
    </Box>
  )
}
