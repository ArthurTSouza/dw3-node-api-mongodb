import Game from "../models/Games.js";

class gameService {
  //Da pra colocar qualquer nome para a função, bom relembrar porque pensei ser uma palavra reservada
  //Funções assíncronas são não bloqueantes
  async getAll() {
    try {
      //trata o sucesso
      //.Find() é o método do Mongoose para buscar registros no banco
      const games = await Game.find();
      return games;
    } catch (error) {
      //Trata a falha
      console.log(error);
    }
  }
}

//Para exportar uma classe é necessário o 'new' após do default
export default new gameService();
