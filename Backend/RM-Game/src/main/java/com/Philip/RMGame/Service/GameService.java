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

        playerRepository.save(player);

        Game game = new Game();

        game.setRounds(4);
        game.setPlayer(player);
        game.setCurrentRound(1);


        //setcurrentRound must be changend

        gameRepository.save(game);

        return game;
    }

    public Game initializeRound(Player player, int recommendationNumber) {
        Game game = gameRepository.findByPlayer(player).orElseThrow(() -> new IllegalArgumentException("Game not found for player!"));
        checkPlayerCash(player, recommendationNumber);
        playerRepository.save(player);
        gameRepository.save(game);

        return game;

    }

    public long recommendationCash(int recommendationNumber) {
        long cash;
        switch (recommendationNumber) {
            case 1, 5 -> cash = 28000;

            case 2 -> cash = 70000;
            case 3, 9, 16, 18 -> cash = 10000;
            case 4, 13 -> cash = 4000;
            case 6, 14 -> cash = 7000;
            case 7 -> cash = 19000;
            case 8 -> cash = 15000;
            case 10 -> cash = 60000;
            case 11 -> cash = 100000;
            case 12 -> cash = 48000;
            case 15 -> cash = 13000;
            case 17 -> cash = 38000;
            case 19 -> cash = 25000;
            case 20 -> cash = 9000;
            default -> cash = 0;
        }
        return cash;
    }

        public int randomStartingMoney() {
            int cash = 20000 + ThreadLocalRandom.current().nextInt(0, 81) * 1000;
            return cash;
        }

    public void checkPlayerCash(Player player, int recommendationNumber) {
        if (recommendationCash(recommendationNumber) > player.getCash()) {
            throw new IllegalArgumentException("You don't have enough money to select this recommendation");
        } else {
            player.setCash(player.getCash() - recommendationCash(recommendationNumber));
        }

    }


}
