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

import java.sql.SQLOutput;

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
        return ResponseEntity.ok(randomMoney);
    }


    @PostMapping("/start")
    public ResponseEntity<Game> startGame(@RequestBody StartGameData data) {
        int randomStartingMoney = gameService.randomStartingMoney();
        Game game = gameService.startNewGame(data.getPlayerName(), gameService.randomStartingMoney());
        System.out.println(game.getPlayer().getPlayerName());

        game.setCash(randomStartingMoney);
        return ResponseEntity.ok(game);
    }


    @PostMapping("/playRound/{playerName}")
    Game playRound(@PathVariable String playerName, @RequestBody GameRoundData data) {
        Game game = gameService.initializeRound(playerName, data.getCash());
        System.out.println(game.getCash());
        return game;
    }

    @GetMapping("/computerCompany")
    public ResponseEntity<ComputerCompany> getComputerCompany() {
        ComputerCompany computerCompany = computerCompanyRepository.findByCompanyName(CompanyName.COMPUTER);
        return ResponseEntity.ok(computerCompany);
    }
}
