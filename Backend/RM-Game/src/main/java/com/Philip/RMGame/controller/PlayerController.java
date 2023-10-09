package com.Philip.RMGame.controller;

import com.Philip.RMGame.Repository.PlayerRepository;
import com.Philip.RMGame.Service.PlayerService;
import com.Philip.RMGame.data.Player;
import com.Philip.RMGame.exception.NotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/player")
public class PlayerController {

    private final PlayerService playerService;


    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }


    @GetMapping("/{id}/cash")
    public ResponseEntity<Long> getPlayerCash(@PathVariable Long id) {
        return ResponseEntity.ok(playerService.getPlayerCash(id));
    }
}
