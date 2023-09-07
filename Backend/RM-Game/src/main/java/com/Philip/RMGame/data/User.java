package com.Philip.RMGame.data;

import jakarta.persistence.*;
import lombok.Getter;

import java.util.Set;

@Getter
@Entity
@Table(name="_user")
public class User {
    @Id
    @GeneratedValue
    private  long id;

    private String username;
    private String password;

    @ElementCollection(fetch= FetchType.EAGER)
    private Set<String> authorities;

    public User(long id, String username, String password, Set<String> authorities) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.authorities = authorities;
    }

    public User() {
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setAuthorities(Set<String> authorities) {
        this.authorities = authorities;
    }
}
