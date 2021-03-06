package com.example.backend.repositories;

import com.example.backend.models.UserEntity;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends MongoRepository<UserEntity,String> {


    public UserEntity findUserEntitiesByPhoneNumber(String phoneNumber);
}
