package com.Philip.RMGame.Service;

import com.Philip.RMGame.Repository.GameRepository;
import com.Philip.RMGame.data.Company;
import com.Philip.RMGame.logic.Game;
import org.springframework.stereotype.Service;

@Service
public class GameService {

    private final GameRepository gameRepository;

    public GameService(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }



    public Game startNewGame(int rounds, String companyName){
        Game game = new Game();
            game.setRounds(rounds);
            game.setCompanyName(companyName);
            //setcurrentRound must be changend

        gameRepository.save(game);
        return game;
    }
}
