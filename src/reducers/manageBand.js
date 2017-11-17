
let id= 0;

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++
      const newBand = Object.assign({}, action.band, {id: id})
      return { bands: state.bands.concat(newBand) }
    case 'DELETE_BAND':
      const filteredBands = state.bands.filter(band => band.id !== action.id)
      return {bands: filteredBands}
    default:
      return state;
  }
};
