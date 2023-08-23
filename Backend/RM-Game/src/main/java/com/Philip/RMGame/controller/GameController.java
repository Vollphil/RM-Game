package com.Philip.RMGame.controller;

import com.Philip.RMGame.Service.GameService;
import com.Philip.RMGame.data.DTO.StartGameData;
import com.Philip.RMGame.logic.Game;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/game")
public class GameController {

    private GameService gameService;
    @PostMapping("/start")
    public ResponseEntity<Game> startGame(@RequestParam StartGameData data){
        Game game = gameService.startNewGame(data.getRounds(),data.getCompany());
        return ResponseEntity.ok(game);
    }
}
