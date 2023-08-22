package com.Philip.RMGame.data;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class ImplementationTime {
    @Id
    @GeneratedValue
    private Long id;
    private String implementationTime;

}
