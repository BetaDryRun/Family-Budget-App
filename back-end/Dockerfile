FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENV MONGO_URI="mongodb+srv://backend:BetaDryRun@cluster0.mi1u8.mongodb.net/primaryDB?retryWrites=true&w=majority"
ENTRYPOINT ["java","-jar","/app.jar"]

CMD gunicorn --bind 0.0.0.0:$PORT wsgi