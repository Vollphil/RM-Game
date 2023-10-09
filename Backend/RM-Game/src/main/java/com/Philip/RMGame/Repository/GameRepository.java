package com.Philip.RMGame.Repository;

import com.Philip.RMGame.data.Player;
import com.Philip.RMGame.logic.Game;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GameRepository extends JpaRepository<Game, Long> {
Optional<Game> findGameByPlayer(Player player);
}
