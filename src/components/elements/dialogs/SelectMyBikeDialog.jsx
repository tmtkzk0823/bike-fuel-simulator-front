//mui
import { Button, Dialog } from '@mui/material'

export const SelectMyBikeDialog = (props) => {
  const { setIsVisibleMyBikeSelectModal, isVisibleMyBikeSelectModal } = props

  return (
    <Dialog
      open={isVisibleMyBikeSelectModal}
      maxWidth={'lg'}
      fullWidth={true}
      onClose={() => setIsVisibleMyBikeSelectModal(false)}
    >
      <Button onClick={() => setIsVisibleMyBikeSelectModal(false)}>
        閉じる
      </Button>
    </Dialog>
  )
}
