package com.Philip.RMGame.Service;

import com.Philip.RMGame.Repository.GameRepository;
import com.Philip.RMGame.Repository.PlayerRepository;
import com.Philip.RMGame.data.Player;
import com.Philip.RMGame.logic.Game;
import org.springframework.stereotype.Service;

import java.util.concurrent.ThreadLocalRandom;

@Service
public class GameService {

    private final GameRepository gameRepository;
    private final PlayerRepository playerRepository;

    public GameService(GameRepository gameRepository, PlayerRepository playerRepository) {
        this.gameRepository = gameRepository;
        this.playerRepository = playerRepository;
    }


    public Game startNewGame( String playerName, int startingMoney) {

        Player player = new Player();
        player.setPlayerName(playerName);
        player.setCash(startingMoney);
        System.out.println(player);

        playerRepository.save(player);

        Game game = new Game();

        game.setRounds(4);
        game.setPlayer(player);
        game.setCurrentRound(1);


        //setcurrentRound must be changend

        gameRepository.save(game);

        return game;
    }

    public Game initializeRound(String playerName, int cash) {
        Player player = playerRepository.findByPlayerName(playerName).orElseThrow(() -> new IllegalArgumentException("Player not found!"));
        Game game = gameRepository.findGameByPlayer(player).orElseThrow(() -> new IllegalArgumentException("Game not found!"));
        player.setCash(cash);
        game.setCash(cash);

        playerRepository.save(player);
        gameRepository.save(game);

        return game;

    }



        public int randomStartingMoney() {
            int cash = 20000 + ThreadLocalRandom.current().nextInt(0, 81) * 1000;
            return cash;
        }




}
