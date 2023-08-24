package com.Philip.RMGame.controller;

import com.Philip.RMGame.Repository.ComputerCompanyRepository;
import com.Philip.RMGame.Service.GameService;
import com.Philip.RMGame.data.DTO.StartGameData;
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
    public GameController(GameService gameService, ComputerCompanyRepository computerCompanyRepository) {
        this.gameService = gameService;
        this.computerCompanyRepository = computerCompanyRepository;
    }

    @PostMapping("/start")
    public ResponseEntity<Game> startGame(@RequestBody StartGameData data){
        System.out.println("Received rounds: " + data.getRounds());
        System.out.println("Received company: " + data.getCompany());
        Game game = gameService.startNewGame(data.getRounds(),data.getCompany());
        return ResponseEntity.ok(game);
    }

    @GetMapping("/computerCompany")
    public ResponseEntity<ComputerCompany> getComputerCompany(){
        ComputerCompany computerCompany = computerCompanyRepository.findByCompanyName(CompanyName.COMPUTER);
        return ResponseEntity.ok(computerCompany);
    }
}
