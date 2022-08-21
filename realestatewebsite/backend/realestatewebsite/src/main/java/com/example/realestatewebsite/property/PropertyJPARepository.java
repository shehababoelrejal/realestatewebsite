package com.example.realestatewebsite.property;

import com.example.realestatewebsite.user.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyJPARepository extends JpaRepository<Property, Long>
{
    List<Property> findByUsers_Id (Long id);
}
