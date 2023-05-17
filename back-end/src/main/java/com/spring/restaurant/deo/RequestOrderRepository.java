package com.spring.restaurant.deo;

import com.spring.restaurant.model.RequestOrder;
import com.spring.restaurant.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RequestOrderRepository extends JpaRepository<RequestOrder,Long> {

    @Query(value = "select * from request_order  WHERE client_id = ?1",nativeQuery = true)
    List<RequestOrder> findByClientId(Long id);

}
