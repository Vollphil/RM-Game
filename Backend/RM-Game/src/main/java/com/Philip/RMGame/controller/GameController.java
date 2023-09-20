package com.Philip.RMGame.controller;

import com.Philip.RMGame.Repository.ComputerCompanyRepository;
import com.Philip.RMGame.Repository.PlayerRepository;
import com.Philip.RMGame.Service.GameService;
import com.Philip.RMGame.data.GameRoundData;
import com.Philip.RMGame.data.Player;
import com.Philip.RMGame.data.StartGameData;
import com.Philip.RMGame.data.enums.CompanyName;
import com.Philip.RMGame.data.table.ComputerCompany;
import com.Philip.RMGame.logic.Game;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/game")
@CrossOrigin()
public class GameController {

    private final GameService gameService;
    private final ComputerCompanyRepository computerCompanyRepository;
    private final PlayerRepository playerRepository;

    public GameController(GameService gameService, ComputerCompanyRepository computerCompanyRepository, PlayerRepository playerRepository) {
        this.gameService = gameService;
        this.computerCompanyRepository = computerCompanyRepository;

        this.playerRepository = playerRepository;
    }

    @GetMapping("/randomStartingMoney")
    public ResponseEntity<Integer> getRandomStartingMoney() {
        int randomMoney = gameService.randomStartingMoney();
        System.out.println(randomMoney);
        return ResponseEntity.ok(randomMoney);
    }


    @PostMapping("/start")
    public ResponseEntity<Game> startGame(@RequestBody StartGameData data) {
        System.out.println("Received PlayerName: " + data.getPlayerName());


        long randomStartingMoney = gameService.randomStartingMoney();

        System.out.println("Generated startingMoney: " + randomStartingMoney);

        Game game = gameService.startNewGame(data.getPlayerName(), gameService.randomStartingMoney());
        return ResponseEntity.ok(game);
    }


    @PostMapping("/playRound")
    public ResponseEntity<Game> playRound(@RequestBody GameRoundData data) {
        System.out.println("Received recommendationData " + data.getRecommendationNumber());
        Player player = playerRepository.findById(data.getPlayerId()).orElseThrow(() -> new IllegalArgumentException("Player not found!"));
        Game game = gameService.initializeRound(player, data.getRecommendationNumber());
        return ResponseEntity.ok(game);
    }

    @GetMapping("/computerCompany")
    public ResponseEntity<ComputerCompany> getComputerCompany() {
        ComputerCompany computerCompany = computerCompanyRepository.findByCompanyName(CompanyName.COMPUTER);
        return ResponseEntity.ok(computerCompany);
    }
}
