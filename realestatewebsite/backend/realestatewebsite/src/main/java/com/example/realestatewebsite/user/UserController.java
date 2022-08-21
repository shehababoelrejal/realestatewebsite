package com.example.realestatewebsite.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;


@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class UserController
{
    @Autowired
    private UserJPARepository userJPARepository;
    @PostMapping("/adduser")
    public ResponseEntity<Users> createUser(@RequestBody Users user)
    {
        Users createdUser = userJPARepository.save(user);
        return new ResponseEntity<Users>(user, HttpStatus.OK);
    }
    @PostMapping("/loginuser")
    public Users loginUser(@RequestBody Users users)
    {
        System.out.println(users);
        Users loginuser = userJPARepository.findByEmail(users.getEmail());
        if(loginuser.getEmail().equals(users.getEmail()) && loginuser.getPassword().equals(users.getPassword()))
        {
            return loginuser;
        }
        return null;
    }
    @PostMapping("/getuser")
    public Users getUser(@RequestBody Users user)
    {
        Users getuser = userJPARepository.findByEmail(user.getEmail());
        return getuser;
    }

    @PostMapping("/deleteuser")
    public ResponseEntity<Object> deleteUser(@RequestBody Users user)
    {
        System.out.println(user);
        Users usertodelete = userJPARepository.findByEmail(user.getEmail());
        userJPARepository.deleteById(usertodelete.getId());
        return ResponseEntity.noContent().build();
    }
    @PutMapping("/updateuser")
    public ResponseEntity<Object> updateUser(@RequestBody Users user)
    {
        System.out.println(user);
        userJPARepository.save(user);
        return ResponseEntity.noContent().build();
    }
}
