package com.Philip.RMGame.controller;

import com.Philip.RMGame.Service.GameService;
import com.Philip.RMGame.logic.Game;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/game")
public class GameController {

    private GameService gameService;
    public ResponseEntity<Game> startGame(@RequestParam int rounds){
        Game game = gameService.startNewGame(rounds);
        return ResponseEntity.ok(game);
    }
}
