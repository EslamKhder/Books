package com.spring.restaurant.controller;

import com.spring.restaurant.deo.RequestOrderRepository;
import com.spring.restaurant.deo.UserDataRepository;
import com.spring.restaurant.model.RequestOrder;
import com.spring.restaurant.model.UserData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// http://localhost:8080/
@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/data")
// http://localhost:8080/
public class UserDataController {

    private UserDataRepository userDataRepository;
    private RequestOrderRepository requestOrderRepository;


    @Autowired
    public UserDataController(UserDataRepository userDataRepository, RequestOrderRepository requestOrderRepository) {
        this.userDataRepository = userDataRepository;
        this.requestOrderRepository = requestOrderRepository;
    }

    @PostMapping("/userData")
    public int create(@RequestBody UserData userData){
        UserData userDataRes = userDataRepository.findByEmail(userData.getEmail());
        if(userDataRes == null){
            return 0;
        }
        userDataRepository.save(userData);
        return 1;
    }


    @PostMapping("/userData/find")
    public UserData get(@RequestBody UserData userData) {
        UserData userDate1 = userDataRepository.findByEmail(userData.getEmail());
        return userDate1;
    }

    @PostMapping("/userData/up")
    public UserData up(@RequestBody UserData userData) {
        UserData userDate1 = userDataRepository.findByEmail(userData.getEmail());
        userData.setId(userDate1.getId());
        userDataRepository.save(userData);
        return userData;
    }

}
