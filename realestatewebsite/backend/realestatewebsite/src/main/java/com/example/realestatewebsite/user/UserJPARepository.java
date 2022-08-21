package com.example.realestatewebsite.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserJPARepository extends JpaRepository<Users, Long>
{
    Users findByEmail(String email);
//    Users deleteByEmail();
}
