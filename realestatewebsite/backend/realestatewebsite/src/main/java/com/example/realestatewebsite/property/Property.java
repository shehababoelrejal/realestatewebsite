package com.example.realestatewebsite.property;

import com.example.realestatewebsite.user.Users;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonCreator;

import javax.persistence.*;
import java.util.Date;

@Table
@Entity
public class Property
{
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String type;
    private String address;
    private String country;
    private String price;
    private String description;
    private Integer size;
    private String phone;
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "usersid")
    private Users users;

    public Property()
    {

    }

    public Property(Long id, String name, String type, String address, String country, String price, String description, Integer size, String phone, Users users) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.address = address;
        this.country = country;
        this.price = price;
        this.description = description;
        this.size = size;
        this.phone = phone;
        this.users = users;
    }

    public Property(String name, String type, String address, String country, String price, String description, Integer size, String phone, Users users) {
        this.name = name;
        this.type = type;
        this.address = address;
        this.country = country;
        this.price = price;
        this.description = description;
        this.size = size;
        this.phone = phone;
        this.users = users;
    }

    @Override
    public String toString() {
        return "Property{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", address='" + address + '\'' +
                ", country='" + country + '\'' +
                ", price='" + price + '\'' +
                ", description='" + description + '\'' +
                ", size=" + size +
                ", phone='" + phone + '\'' +
                ", users=" + users +
                '}';
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
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

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }
}
