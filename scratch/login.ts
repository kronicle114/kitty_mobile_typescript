/*

handleMysteryPress = () => {
  async function getSkywalkerfromApi() {
    try {
      let response = await fetch(`https://swapi.co/api/people/1`)
      let responseJson = await response.json()
      console.log('res: ', responseJson)
      Alert.alert(responseJson.name)
      return responseJson
    } catch (error) {
      console.error(error)
    }
  }
  getSkywalkerfromApi()
}

handleCatImg = () => {
  async function getCat() {
    try {
      let response = await fetch(`https://api.thecatapi.com/v1/images/search`)
      let responseJson = await response.json()
      Alert.alert(responseJson[0].url)
      return responseJson
    } catch (error) {
      console.error(error)
    }
  }
  getCat()
}

*/
