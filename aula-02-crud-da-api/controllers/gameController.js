import gameService from "../services/gameService.js";

//Função para tratar a requisição de listar os jogos
const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    res.status(200).json({ games: games });
    //RRRAAAAAEEEE *Klank Klank* muitos nomes iguais
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor. Não foi possível listar os jogos." });
  }
};

//Função para tratar a requisição de Cadastrar o jogo
const createGame = async (req, res) => {
  try {
    const {title,platform,year,price} = req.body //Coletando os dados do corpo da requisição
    //Passando os dados para o Service
    await gameService.Create(title,platform,year,price)
    res.status(201).json("O jogo foi cadastrado com sucesso!")
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor. Não foi possível cadastrar o jogo." });
  }
};

export default { getAllGames, createGame };
