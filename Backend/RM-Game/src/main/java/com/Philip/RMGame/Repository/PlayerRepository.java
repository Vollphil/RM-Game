package com.Philip.RMGame.Repository;

import com.Philip.RMGame.data.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player,Long> {
}
