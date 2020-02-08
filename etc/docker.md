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

### docker logs {container}

현재 실행중인 컨테이너의 로그를 확인한다.

```
docker logs --tail 10 -f {container}
```

## Dockerfile

이미지를 만들기 위한 빌드용 DSL 파일입니다.

### Dockerfile 기본 명령어

### FROM

베이스 이미지를 지정한다.

```Dockerfile
FROM <image>:<tag>
```

### COPY

파일이나 디렉토리를 이미지로 복사한다. (타겟 디렉토리가 없다면 자동으로 생성)

```Dockerfile
COPY <src> <dest>
```

### RUN

명령어를 그대로 실행한다.

```Dockerfile
RUN <command>
```

### CMD

도커 컨테이너가 실행되었을 때 실행되는 명령어를 정의한다.

```Dockerfile
CMD ["executable","param1","param2"]
```

### WORKDIR

RUN, CMD, COPY등이 이루어질 기본 디렉토리를 설정한다.

```Dockerfile
WORKDIR <path>
```

### EXPOSE

도커 컨테이너가 실행되었을때 요청을 기다리고 있는 포트를 지정한다.

```Dockerfile
EXPOSE <port>
```

### ENV

컨테이너에서 사용할 환경변수를 지정한다.

```Dockerfile
ENV <key>=<value>
```

### 예제

```Dockerfile
FROM node:10

# 앱 디렉터리 생성
WORKDIR /usr/src/app

# 앱 의존성 설치
# 가능한 경우(npm@5+) package.json과 package-lock.json을 모두 복사하기 위해
# 와일드카드를 사용
COPY package*.json ./

RUN npm install
# 프로덕션을 위한 코드를 빌드하는 경우
# RUN npm ci --only=production

# 앱 소스 추가
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]
```

### .dockerignore

빌드할 때 무시할 파일이나 디렉토리를 정한다.
