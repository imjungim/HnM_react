function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/imjungim/HnM_react/products?q=${searchQuery}`
    let response = await fetch(url)
    let data = await response.json()
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: {data} })
  }
}

export const productAction = { getProducts }
//함수들을 객체에 담아 리턴