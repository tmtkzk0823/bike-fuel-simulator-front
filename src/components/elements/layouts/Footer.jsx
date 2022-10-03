import { styled } from '@mui/material/styles'

export const Footer = () => {
  return (
    <SFooter>
      <p>&copy;バイク航続距離シュミレーター</p>
      <p>プライバシーポリシー</p> {/*後にリンク(モーダル表示のイベント)を作成*/}
      <p>利用規約</p> {/*後にリンク(モーダル表示のイベント)を作成*/}
      <p>twitter</p> {/*後にリンク(開発者twitter)を作成*/}
    </SFooter>
  )
}

const SFooter = styled('div')`
  background-color: #ffffdd;
  color: #444444;
  padding: 4px 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`