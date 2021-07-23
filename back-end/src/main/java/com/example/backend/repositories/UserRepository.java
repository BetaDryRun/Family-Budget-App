package com.example.backend.repositories;

import com.example.backend.models.UserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends MongoRepository<UserEntity,String> {

    UserEntity findByPhoneNumber(String phoneNumber);
}
