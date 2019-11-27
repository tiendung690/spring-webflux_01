package com.spring.web.flux.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import com.spring.web.flux.model.Customer;

import reactor.core.publisher.Flux;

public interface ReactiveCustomerRepository extends ReactiveCrudRepository<Customer, String> {
 
	Flux<Customer> findByName(String name);
}