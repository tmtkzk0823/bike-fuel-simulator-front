// MUI
import { Dialog, DialogContent, DialogTitle } from '@mui/material'

// component
import { MakersBikeList } from './MakersBikeList'

export const SelectBikeMakerDialog = (props) => {
  const {
    selectBike,
    setSelectBike,
    changeSelectBike,
    sampleBikeArray,
    isVisibleBikeSelectModal,
    setIsVisibleBikeSelectModal,
  } = props

  return (
    <Dialog
      open={isVisibleBikeSelectModal}
      onClose={() => setIsVisibleBikeSelectModal(false)}
    >
      <DialogTitle
        sx={{
          fontSize: '30px',
          textAlign: 'center',
        }}
      >
        メーカー
      </DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
        }}
      >
        <MakersBikeList
          bikeMaker={'HONDA'}
          selectBike={selectBike}
          setSelectBike={setSelectBike}
          changeSelectBike={changeSelectBike}
          sampleBikeArray={sampleBikeArray}
        />
        <MakersBikeList
          bikeMaker={'YAMAHA'}
          selectBike={selectBike}
          setSelectBike={setSelectBike}
          changeSelectBike={changeSelectBike}
          sampleBikeArray={sampleBikeArray}
        />
        <MakersBikeList
          bikeMaker={'SUZUKI'}
          selectBike={selectBike}
          setSelectBike={setSelectBike}
          changeSelectBike={changeSelectBike}
          sampleBikeArray={sampleBikeArray}
        />
        <MakersBikeList
          bikeMaker={'KAWASAKI'}
          selectBike={selectBike}
          setSelectBike={setSelectBike}
          changeSelectBike={changeSelectBike}
          sampleBikeArray={sampleBikeArray}
        />
      </DialogContent>
    </Dialog>
  )
}
