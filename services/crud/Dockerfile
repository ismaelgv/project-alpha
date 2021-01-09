FROM openjdk:11-jdk-slim as builder
WORKDIR /app
COPY . ./
RUN ./mvnw package

FROM openjdk:11-jre-slim
WORKDIR /app
COPY --from=builder /app/target/*.jar ./alpha-crud.jar
EXPOSE 8080
ENTRYPOINT java -jar ./alpha-crud.jar
