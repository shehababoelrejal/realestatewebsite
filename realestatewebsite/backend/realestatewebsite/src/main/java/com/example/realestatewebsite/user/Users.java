package com.example.realestatewebsite.user;

import com.example.realestatewebsite.property.Property;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Table
@Entity
public class Users
{
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String address;
    private String country;
    private String password;
    private String email;
    private Date dob;
    @JsonManagedReference
    @OneToMany(
            mappedBy = "users",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Property> properties = new ArrayList<>();

    public Users()
    {

    }

    public Users(String name, String address, String country, String password, String email, Date dob, List<Property> properties) {
        this.name = name;
        this.address = address;
        this.country = country;
        this.password = password;
        this.email = email;
        this.dob = dob;
        this.properties = properties;
    }

    public Users(Long id, String name, String address, String country, String password, String email, Date dob, List<Property> properties) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.country = country;
        this.password = password;
        this.email = email;
        this.dob = dob;
        this.properties = properties;
    }

    @Override
    public String toString() {
        return "Users{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", country='" + country + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", dob=" + dob +
                ", properties=" + properties +
                '}';
    }

    public List<Property> getProperties() {
        return properties;
    }

    public void setProperties(List<Property> properties) {
        this.properties = properties;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

}
