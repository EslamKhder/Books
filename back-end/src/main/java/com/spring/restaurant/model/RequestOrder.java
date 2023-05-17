package com.spring.restaurant.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "request_order")
public class RequestOrder extends CategoryOrder{

    @Column(name = "code")
    private String code;

    @Column(name = "total_price")
    private int totalPrice;

    @Column(name = "total_quantity")
    private int totalQuantity;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "requestOrder")
    private List<Item> items = new ArrayList<>();

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client = new Client();

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "to_address_id",referencedColumnName = "id")
    private Address toAddress = new Address();

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "from_address_id",referencedColumnName = "id")
    private Address fromAddress = new Address();

    public void addItem(Item item){
        items.add(item);
        item.setRequestOrder(this);
    }
}
