package com.example.realestatewebsite.property;

import com.example.realestatewebsite.user.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class PropertyController
{
    @Autowired
    private PropertyJPARepository propertyJPARepository;
    @GetMapping("/getallproperties")
    public List<Property> getAllProperties()
    {
        List<Property> properties = propertyJPARepository.findAll();
        return properties;
    }
    @PostMapping("/addproperty")
    public ResponseEntity<Property> addProperty(@RequestBody Property property)
    {
        System.out.println(property);
        Property addedproperty = propertyJPARepository.save(property);
        return new ResponseEntity<Property>(addedproperty, HttpStatus.OK);
    }
    @PostMapping("/getuserproperties")
    public List<Property> getUserProperties(@RequestBody Users users)
    {
        List<Property> properties = propertyJPARepository.findByUsers_Id(users.getId());
        return properties;
    }
    @PostMapping("/deleteuserproperty")
    public ResponseEntity<Void> deleteUserPoperty(@RequestBody Property property)
    {
        System.out.println(property);
        propertyJPARepository.deleteById(property.getId());
        return ResponseEntity.noContent().build();
    }
    @PostMapping("/getuserproperty")
    public Optional<Property> getUserProperty (@RequestBody Property property)
    {
        System.out.println(property);
        Optional<Property> userproperty = propertyJPARepository.findById(property.getId());
        return userproperty;
    }
    @PutMapping("/updateuserproperty")
    public ResponseEntity<Object> updateUserProperty(@RequestBody Property property)
    {
        System.out.println(property);
        propertyJPARepository.save(property);
        return ResponseEntity.noContent().build();
    }
}
