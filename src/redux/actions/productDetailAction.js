function getProductDetail(id) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/imjungim/HnM_react/products/${id}`
    let response = await fetch(url)
    let data = await response.json()

    dispatch({ type: 'GET_PRODUCT_DETAIL', payload: { data } })
  }
}

export const productDetailAction = { getProductDetail }
