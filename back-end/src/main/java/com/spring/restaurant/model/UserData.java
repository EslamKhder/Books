package com.spring.restaurant.model;

import lombok.*;

import javax.persistence.Entity;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class UserData  extends BaseEntity{

    private String ssn;
    private String email;
    private String password;
    private String firstName;
    private String secondName;
    private String thirdName;
    private String fourthName;
    private String city;
    private String street;
    private String building;
    private String phone;
    private String gender;
    private String birthDate;


}
