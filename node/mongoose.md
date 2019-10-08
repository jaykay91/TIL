# Mongoose

## Query

### find
배열을 반환
```js
// 전체 검색
await Post.find()
// 조건 검색
await Post.find({ postid: 1 })
// ne
// distinct
// gt gte lt lte
// regex
// and or nor
```

### sort
검색된 결과를 정렬
```js
// 오름차순
await Post.find().sort({ postid: 1 })
// 내림차순
await Post.find().sort({ postid: -1 })
```

### skip
n개만큼 검색된 결과를 넘기기
```js
await Post.find().skip(n)
```

### limit
검색된 결과를 n개만큼 제한
```js
await Post.find().limit(n)
```

### select
검색된 결과에서 필요한 컬럼만 반환
```js
await Post.find().select('title writer postid')
```

## Example

