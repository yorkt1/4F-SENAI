package com.pets.pets.controller;
import com.pets.pets.model.Order;
import com.pets.pets.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {
@Autowired
private OrderRepository orderRepository;
@GetMapping
public List<Order> getAllOrder() {
return orderRepository.findAll();
}
@PostMapping
public Order createOrder(@RequestBody
Order order) {
return orderRepository.save(order);
}
}
