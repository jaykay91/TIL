# Docker

Docker는 컨테이너를 사용하여 애플리케이션을 개발, 배포, 실행하기 위한 플랫폼입니다.

## Docker 자주 쓰는 명령어

### docker build {path}

Dockerfile을 이미지로 빌드한다.

```
docker build -t node-app .
```

### docker tag

이미지에 태그를 설정한다.

### docker pull {image}

원격 저장소에서 이미지를 가져온다.

```
docker pull mysql:5.7
```

### docker push {image}

원격 저장소로 이미지를 push한다.

```
docker push mysql:5.7
```

### docker run {image}

이미지를 컨테이너로 실행한다.  
-d: 백그라운드 실행  
-p: 호스트와 컨테이너의 포트를 연결  
--name: 컨테이너의 이름을 지정  
-v: 볼륨 마운트  
-e: 환경변수 지정

```
docker run -d -p 3306:3306 \
--name mysql \
-v /dev:/var/lib/mysql \
-e MYSQL_ALLOW_EMPTY_PASSWORD=true \
mysql:5.7
```

### docker ps

현재 실행중인 컨테이너를 확인한다.

### docker exec {container}

현재 실행중인 컨테이너에 명령어를 실행한다.

```
docker exec -it mysql bash
```

### docker (start or stop or restart) {container}

현재 실행중인 컨테이너를 시작, 중지, 다시 시작 한다.

### docker rm {container}

컨테이너를 지운다.

### docker rmi {container}

이미지를 삭제한다.

## Dockerfile

### .dockerignore
