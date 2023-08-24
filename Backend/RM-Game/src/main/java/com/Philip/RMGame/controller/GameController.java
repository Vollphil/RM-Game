package com.Philip.RMGame.controller;

import com.Philip.RMGame.Service.GameService;
import com.Philip.RMGame.data.DTO.StartGameData;
import com.Philip.RMGame.logic.Game;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/game")
@CrossOrigin()
public class GameController {

    private final GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @PostMapping("/start")
    public ResponseEntity<Game> startGame(@RequestBody StartGameData data){
        System.out.println("Received rounds: " + data.getRounds());
        System.out.println("Received company: " + data.getCompany());
        Game game = gameService.startNewGame(data.getRounds(),data.getCompany());
        return ResponseEntity.ok(game);
    }
}
