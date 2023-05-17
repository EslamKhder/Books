package com.spring.restaurant.deo;

import com.spring.restaurant.model.UserData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDataRepository extends JpaRepository<UserData,Long> {

    UserData findByEmail(String email);
}
