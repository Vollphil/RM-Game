package com.Philip.RMGame.Service;

import com.Philip.RMGame.Repository.PlayerRepository;
import com.Philip.RMGame.data.Player;
import org.springframework.stereotype.Service;

@Service
public class PlayerService {
private final PlayerRepository playerRepository;

    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }
    public long getPlayerCash(Long playerId){
        return playerRepository.findById(playerId)
                .map(Player::getCash)
                .orElseThrow(() -> new IllegalArgumentException("Player not found with id: " + playerId));
    }
}
