# Mongodb

## Query

### find

배열을 반환

```js
// 전체 검색
db.posts.find();

// 조건 검색
// postid가 1인 post 검색
db.posts.find({ postid: 1 });

// projection
// 필요한 필드만 1로 선택
// 필요하지 않은 필드는 0으로 선택하지 않음
// postid와 _id만 가져옴
db.posts.find({}, { postid: 1 });
```

### 비교 연산자

$gt: 초과  
$gte: 이상  
$lt: 미만  
$lte: 이하  
$eq: 일치  
$ne: 불일치  
$in: 배열이 포함하는 값  
$nin: 배열이 포함하지 않는 값

```js
// 예제
```

### 논리 연산자

$and, $or, $not, $nor이 있다.

```js
// example
```

### sort

검색된 결과를 정렬

```js
// 오름차순
db.posts.find().sort({ postid: 1 });
// 내림차순
db.posts.find().sort({ postid: -1 });
```

### skip

n개만큼 검색된 결과를 넘기기

```js
db.posts.find().skip(n);
```

### limit

검색된 결과를 n개만큼 제한

```js
db.posts.find().limit(n);
```
