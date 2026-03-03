import Game from "../models/Games.js";

//todos os métodos devem estar dentro dessa primeira chave da Classe
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
  //Cadastrar game
  async Create(title,platform,year,price){
    try{
      const newGame= new Game({
        //Desestruturação (title : title)
        title,
        platform,
        year,
        price
      })
      //Gravando no banco
      await newGame.save(); // .save() é um método do mongoose para cadastrar no BD
    }catch(error){
      console.log(error);
    }
  }
}



//Para exportar uma classe é necessário o 'new' após do default
export default new gameService();
