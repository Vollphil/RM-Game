package com.Philip.RMGame.Repository;

import com.Philip.RMGame.logic.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Long> {
}
